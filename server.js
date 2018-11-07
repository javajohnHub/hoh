var express = require('express')
    , app = express()
    , server = require('http').createServer(app)

var port = process.env.PORT || 5000;

app.set('port', port);
app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/dist');

app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
    res.render('dist/index.html');
});

server.listen(app.get('port'), function(){

});

