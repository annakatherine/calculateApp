
var calcFunction = function( checkInput ){
  console.log( 'hello from calcFunction: ' + checkInput.x);
var output = '';
if( checkInput.type === 'plus' ){

  output = Number(checkInput.x) + Number(checkInput.y);
  console.log( 'from plus if, output = '+ output);

} else if ( checkInput.type === 'minus' ){

  output = checkInput.x - checkInput.y;
  console.log( 'from minus if, output = '+ output);

} else if ( checkInput.type === 'times' ) {

  output = checkInput.x * checkInput.y;
  console.log( 'from times if, output = ' + output);

} else if ( checkInput.type === 'divide' ){

  output = checkInput.x / checkInput.y;
  console.log( 'from divide if, output = ' + output);

}
return output;
};

module.exports = calcFunction;
