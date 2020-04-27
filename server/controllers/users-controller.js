const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function (req, res, next) {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: 'user',
            cart: [],
        }, function (err, result) {
            if (err)
                next(err);
            else {
                const token = jwt.sign({id: result._id, role: result.role, name: result.name}, req.app.get('secretKey'), {expiresIn: '1h'});
                res.header('Set-Cookie', `x-access-token=${token}; HttpOnly`);
                res.json({status: "success", message: "User added successfully!!!", data: null});
            }

        });
    },
    authenticate: function (req, res, next) {
        userModel.findOne({email: req.body.email}, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (userInfo && bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id, role: userInfo.role, name: userInfo.name}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.header('Set-Cookie', `x-access-token=${token}; HttpOnly`);
                    res.json({status: "success", message: "user found!!!", data: {user: userInfo}});
                } else {
                    res.json({status: "error", message: "Invalid email/password!!!", data: null});
                }
            }
        });
    },
    logout: function (req, res, next) {
        res.header('Set-Cookie', `x-access-token=; maxAge=${Date.now()}; HttpOnly`);
        res.json({status: "success", message: "token deleted found!!!"});
    }
};