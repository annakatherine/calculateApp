output = '';
type = '';
// input = input;
var calculate = function(x,y){
  console.log( 'hello from calculate' );
  // console.log(input);

if( type === 'plus' ){

  output = x + y;
  console.log( 'from plus if, output = '+ output);

} else if ( type === 'minus' ){

  output = x - y;
  console.log( 'from minus if, output = '+ output);

} else if ( type === 'times' ) {

  output = x * y;
  console.log( 'from times if, output = ' + output);

} else if ( type === 'divide' ){

  output = x / y;
  console.log( 'from divide if, output = ' + output);

}
};

console.log('output should be ' + output);

module.exports = calculate;
