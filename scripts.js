console.log( ' hello from js ' );
$(document).ready(function(){

  console.log( 'hello from jquery ');

});


var x = '';
x.className = 'x';

var y = '';
y.className = 'y';

var type = '';
type.className = 'type';

var input = {
x: '',
y: '',
type: '' };

console.log(input);

$('#Booyah').on('click', function(){

console.log( 'Booyah button clicked' );

});

$('#one').on('click', function(){

console.log( 'one button clicked ');

if ( input.x === '' ){
  input.x = 1;
}

else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 1;
}

else {
  console.log( 'error in onclick one');
}
console.log(x);
console.log(y);
console.log('from one click: ');
console.log(input);

});

$('#two').on('click', function(){

console.log( 'two button clicked' );

if ( input.x === '' ){
  input.x = 2;
}
else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 2;
}

else {
  console.log( 'error in onclick two');
}
console.log(input);
});

$('#three').on('click', function(){

console.log( 'three button clicked' );

if ( input.x === '' ){
  input.x = 3;
}

else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 3;
}

else {
  console.log( 'error in onclick three');
}
console.log(input);
});

$('#four').on('click', function(){

console.log( 'four button clicked' );

if ( input.x === '' ){
  input.x = 4;
}

else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 4;
}

else {
  console.log( 'error in onclick four');
}
console.log(x);
console.log(y);
});

$('#five').on('click', function(){

console.log( 'five button clicked' );
if ( input.x === '' ){
  input.x = 5;
}
else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 5;
}

else {
  console.log( 'error in onclick five');
}
console.log(x);
console.log(y);
});

$('#six').on('click', function(){

console.log( 'six button clicked' );
if ( input.x === '' ){
  input.x = 6;
}
else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 6;
}

else {
  console.log( 'error in onclick six');
}

console.log(x);
console.log(y);

});

$('#seven').on('click', function(){

console.log( 'seven button clicked' );

if ( input.x === '' ){
  input.x = 7;
}
else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 7;
}

else {
  console.log( 'error in onclick seven');
}
console.log(x);
console.log(y);


});

$('#eight').on('click', function(){

console.log( 'eight button clicked' );
if ( input.x === '' ){
  input.x = 8;
}
else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 8;
}

else {
  console.log( 'error in onclick eight');
}
console.log(input);

});

$('#nine').on('click', function(){

console.log( 'nine button clicked' );
if ( input.x === '' ){
  input.x = 9;
}
else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 9;
}

else {
  console.log( 'error in onclick nine');
}
console.log(input);

});

$('#zero').on('click', function(){

console.log( 'zero button clicked' );
if ( input.x === '' ){
  input.x = 0;
}

else if ( input.type === '' ){
  alert('method needed');
  return;
}

else if ( input.y === '' ){
  input.y = 0;
}

else {
  console.log( 'error in onclick zero');
}
console.log(x);
console.log(y);

});

$('#divide').on('click', function(){

console.log( 'divide button clicked' );

if ( input.x !== '' && input.type === '' ){
  input.type = 'divide';
}

else {
  console.log( 'error in onclick divide');
}
console.log(type);

});

$('#times').on('click', function(){

console.log( 'times button clicked' );
if ( input.type === '' ){
  input.type = 'times';
}

else {
  console.log( 'error in onclick times');
}
console.log(type);

});

$('#minus').on('click', function(){

console.log( 'minus button clicked' );
if ( input.type === '' ){
  input.type = 'minus';
}

else {
  console.log( 'error in onclick minus');
}
console.log(type);

});

$('#plus').on('click', function(){

console.log( 'plus button clicked' );

if ( input.type === '' ){
  input.type = 'plus';
}

else {
  console.log( 'error in onclick plus');
}
console.log(type);

});

$('#Submit').on('click', function(){

console.log( 'Submit button clicked' );
startServerSide();

});

function startServerSide(){
  console.log( 'in startServerSide function ');
  $.ajax({
    type: "POST",
    data: input,
    url: 'https://modules/calculate',
    success: function( data ) {
        console.log( 'hello from ajax');
        // function to process response
    }, error: function(){
      alert( 'Error accessing' );
    }
  });
}
