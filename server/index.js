const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const morgan = require('morgan');
const multer = require("multer");
const path = require("path");
const jwt = require('jsonwebtoken');

const db = require('./db')
const toolRouter = require('./routes/tools-router')
const userRouter = require('./routes/users-router')
const cartRouter = require('./routes/cart-router')
const orderRouter = require('./routes/order-router')

const app = express()
const fileUpload = require('express-fileupload');
const apiPort = 5000
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.set('secretKey', 'nodeRestApi');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('short'));
app.use(cookieParser());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(fileUpload());
app.use('/', userRouter);

app.use('/',validateUser, toolRouter)
app.use('/',validateUser, cartRouter)
app.use('/',validateUser, orderRouter)
//app.use('/api', toolRouter)

function validateUser(req, res, next) {
    jwt.verify(req.cookies['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
          //  res.status(401);
           // res.json({status: "error", message: err.message, data: null});
            req.body.role = 'not authenticate'
        } else {
            req.body.userId = decoded.id;
            req.body.role = decoded.role;
            req.body.name = decoded.name;
        }
        next();
    });
}

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    if (err.status === 404)
        res.status(404).json({message: "Not found"});
    else
        res.status(500).json({message: "Something looks wrong :( !!!"});
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
