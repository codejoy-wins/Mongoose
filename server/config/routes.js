const mongoose = require('mongoose');
var controller = require('./../controllers/quotes.js');
      Quote = mongoose.model('Quote');
module.exports = function(app){
    app.get('/', controller.index);
    
    app.get('/quotes', controller.quotes);
    
    app.post('/quotes', controller.postQuotes);
}



