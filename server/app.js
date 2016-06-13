var express = require( 'express' );
var path = require( 'path' );
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var app = express();

var calculate = require('../modules/calculate');

var server = app.listen( 3000, 'localhost', function(){
  console.log( 'server listening on port 3000' );
});


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get( '/', function( req, res ){
// console.log('hello from base url' + path.resolve( 'public/views/index.html' ));
res.sendFile( path.resolve( 'public/views/index.html' ));
});


app.post( '/calculate', urlencodedParser, function( req, res ){
console.log( 'from inside app.post ');
var responseFromModule = calculate( req.body );
console.log ('from app.js, req.body: ' + req.body.x );
// res.send( responseFromModule.toString() );
});

app.use( express.static( 'public' ) );
