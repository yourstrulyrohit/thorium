const mongoose = require("mongoose")

const publisherSchema = new mongoose.Schema( {
    publisher_name: String,
    headQuaters:String

}, { timestamps: true });


module.exports = mongoose.model('NewPublisher', publisherSchema)