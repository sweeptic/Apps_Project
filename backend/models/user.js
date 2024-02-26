const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    projects: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Project' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
