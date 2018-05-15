const mongoose = require('mongoose'),
      Quote = mongoose.model('Quote')
module.exports = function(app){
        app.get('/', function(req, res){
        res.render('index');
    })
    
    app.get('/quotes', function(req, res){
        Quote.find({}, function(err, quotes) {
            if(err) {
                console.log('something went wrong');
            } else {
                console.log('successfully added quote');
                res.render('display', {stuff: quotes});
            }
        })
    })
    
    app.post('/quotes', function(req, res){
        console.log(req.body);
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if(err){
                console.log('mistake', err);
                for (var x in err.errors){
                    req.flash('famous', err.errors[x].message);
                }
            res.redirect('/');
            } else {
                console.log('successfully added a quote');
                res.redirect('/quotes');
            }
        });
    });
}



