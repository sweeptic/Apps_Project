const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// ok

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    projects: [{
        id: { type: String, required: true },
        title: { type: String, required: true },
    }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
