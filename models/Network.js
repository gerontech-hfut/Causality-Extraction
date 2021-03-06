const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NetworkSchema = new Schema({
    username: {
        type: String,
        default: "admin"
    },
    field: {
        type: String,
        required: true
    },
    numOfNodes: {
        type: Number,
        required: true,
    },
    numOfLinks: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: new Date(),
    }
})

module.exports = Network = mongoose.model('networks', NetworkSchema);

