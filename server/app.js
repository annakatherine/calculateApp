var express = require( 'express' );
var path = require( 'path' );
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var app = express();
var calculate = require('../modules/calculate');

var server = app.listen( 3000, 'localhost', function(){
  console.log( 'server listening on port 3000' );
});

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'public/views/index.html' ));
});

app.post( '/moduleAddress', urlencodedParser, function( req, res ){
  console.log( 'from inside app.post ');
  console.log(req.body);
  var responseFromModule = calculate( req.body );
  console.log("Here:"  + responseFromModule);
   res.send( responseFromModule.toString() );
});

app.use( express.static( 'public' ) );
