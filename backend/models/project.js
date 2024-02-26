const mongoose = require('mongoose');
// ok
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Project', projectSchema);
