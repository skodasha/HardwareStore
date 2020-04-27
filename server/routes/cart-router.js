const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const User = require('../models/users');
const router = Router();

router.get('/cart',(req, res) => {
    User.findOne({ _id: req.body.userId },(err, user) =>{
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found.',
            })
        }
        if(user){
            res.json(user.cart)
        }
        
    })
});

router.put('/cart_add',(req, res) => {
    User.findOne({ _id: req.body.userId },(err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found.',
            })
        }
        let newTool = { id: req.body.id, count: 1};
        user.updateOne({$push: { cart: newTool}}).then(() => {
            return res.status(200).json({
                success: true,
                tool: newTool,
                message: 'User updated.',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'User not updated.',
            })
        })
    })
});

router.delete('/cart_delete/:id', (req, res) => {
    User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found.',
            })
        }
        
        let deleteTool = user.cart.find(item => item.id === req.params.id);
        user.updateOne({$pull: { cart: deleteTool}}).then(() => {
            return res.status(200).json({
                success: true,
                tool: deleteTool,
                message: 'delete.',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'not delete.',
            })
        })
    })
});

router.put('/cart_update/:id', (req, res) => {
    User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found.',
            })
        }
        
        user.cart.map(item => item.count = (item.id === req.params.id) ? req.body.count : item.count);

        user.updateOne({$set: user}).then(() => {
            

                return res.status(200).json({
                    success: true,
                    user: user,
                    message: 'User updated.',
                })

            
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'not delete.',
            })
        })
    })
});

module.exports = router;