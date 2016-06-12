var express = require( 'express' );
var path = require( 'path' );
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var app = express();
var calculate = require('../modules/calculate');

var server = app.listen( 3000, 'localhost', function(){
  console.log( 'server listening on port 3000' );
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get( '/', function( req, res ){
res.write( 'hello from base url' );
res.sendFile( path.resolve( '/index.html' ));
res.end();

});

app.post( '../modules/calculate', urlencodedParser, function( req, res){
var calculate = calculate(req.body.calculate);
res.write( "it's pinging from the calculator" ) ;
res.end();

});
//makes
app.use( express.static( 'public' ) );
