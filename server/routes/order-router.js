const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();
const User = require('../models/users');

router.post('/order', (req, res) => {

    User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found.',
            })
        }
        if(user){
            var transporter = nodemailer.createTransport({
                port: 587,
                address: 'smtp.gmail.com',
                service: 'gmail',
                auth: {
                  user: '1mirnamarse1@gmail.com',
                  pass: 'marsikdashakis'
                },
                authentication:       'plain',
            });
              
            let order = '';
            req.body.cartTools.map(item => order += item.title + ' - ' + item.count + '. \n');

            var mailOptions = {
                from: '1mirnamarse1@gmail.com',
                to: user.email,
                subject: 'Order',
                text: `Hello, ${user.name}! \nYour order is accepted. \n\n${order} `,
                
            };
              
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  return res.status(200).json({
                    success: true,
                    message: 'Send.',
                    })
                }
            });
        }
    })
});

module.exports = router;