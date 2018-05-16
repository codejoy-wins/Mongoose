const mongoose = require('mongoose');
module.exports = function (app){
    var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    quote: { type: String, required: true, minlength: 2}
    }, {timestamps: true});
    mongoose.model('Quote', QuoteSchema);
    var Quote = mongoose.model('Quote');
}
    