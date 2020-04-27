const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        require: true,
    },
    cart: {
        type: Array,
        trim: true,
        require: true,
    },
    _deletedAt: { type: Date, default: null },
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = model('users', UserSchema);