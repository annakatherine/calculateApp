console.log( ' hello from js ' );
$(document).ready(function(){
  console.log( 'hello from jquery ');
 var input = '';
  var x = '';
  var y = '';
  var type = '';

  $('#Submit').on('click', function(){
    console.log( 'Submit button clicked' );
    startServerSide( input );
  });

  $('#one').on('click', function(){
    console.log( 'one button clicked ');
    if ( input.x === '' ){
      input.x = 1;
      console.log(input);
    }
    else if ( input.type === '' ){
      alert('method needed');
      return;
    }
    else if ( input.y === '' ){
      input.y = 1;
      console.log(input);
    }
    else {
      console.log( 'error in onclick one');
    }
    console.log('from one click: ');
    console.log(input);
  });

  $('#two').on('click', function(){
    console.log( 'two button clicked' );
    if ( input.x === '' ){
        input.x = 2;
        console.log(input);
    } else if ( input.type === '' ){
        alert('method needed');
        return;
    } else if ( input.y === '' ){
        input.y = 2;
        console.log(input);
    } else {
      console.log( 'error in onclick two');
    } console.log(input);
  });

  $('#three').on('click', function(){
    console.log( 'three button clicked' );
    if ( input.x === '' ){
      input.x = 3;
      console.log(input);
    } else if ( input.type === '' ){
        alert('method needed');
        return;
    } else if ( input.y === '' ){
        input.y = 3;
        console.log(input);
    } else {
        console.log( 'error in onclick three');
    }
  });

  $('#four').on('click', function(){
    console.log( 'four button clicked' );
    if ( input.x === '' ){
      input.x = 4;
      console.log(input);
    } else if ( input.type === '' ){
      alert('method needed');
      return;
    } else if ( input.y === '' ){
      input.y = 4;
      console.log(input);
    } else {
      console.log( 'error in onclick four');
    }
  });

  $('#five').on('click', function(){
    console.log( 'five button clicked' );
    if ( input.x === '' ){
      input.x = 5;
      console.log(input);
      return;
    } else if ( input.type === '' ){
        alert('method needed');
        return;
    } else if ( input.y === '' ){
        input.y = 5;
        console.log(input);
        return;
    } else {
        console.log( 'error in onclick five');
    }
  });

  $('#six').on('click', function(){
    console.log( 'six button clicked' );
    if ( input.x === '' ){
      input.x = 6;
    } else if ( input.type === '' ){
      alert('method needed');
      return;
    } else if ( input.y === '' ){
      input.y = 6;
    } else {
      console.log( 'error in onclick six');
    }
   });

  $('#seven').on('click', function(){
    console.log( 'seven button clicked' );
    if( input.x === '' ){
      input.x = 7;
    } else if ( input.type === '' ){
      alert('method needed');
      return;
    } else if ( input.y === '' ){
        input.y = 7;
    } else {
        console.log( 'error in onclick seven');
    }
  });

  $('#eight').on('click', function(){
    console.log( 'eight button clicked' );
    if ( input.x === '' ){
      input.x = 8;
    } else if ( input.type === '' ){
      alert('method needed');
      return;
    } else if ( input.y === '' ){
      input.y = 8;
    } else {
      console.log( 'error in onclick eight');
    } console.log(input);
  });

  $('#nine').on('click', function(){
    console.log( 'nine button clicked' );
    if ( input.x === '' ){
      input.x = 9;
    } else if ( input.type === '' ){
      alert('method needed');
      return;
    } else if ( input.y === '' ){
      input.y = 9;
    } else {
      console.log( 'error in onclick nine');
  } console.log(input);
  });

  $('#zero').on('click', function(){
    console.log( 'zero button clicked' );
    if ( input.x === '' ){
      input.x = 0;
    } else if ( input.type === '' ){
      alert('method needed');
      return;
    } else if ( input.y === '' ){
        input.y = 0;
      } else {
        console.log( 'error in onclick zero');
      }
  });

  $('#divide').on('click', function(){
    console.log( 'divide button clicked' );
    if ( input.x !== '' && input.type === '' ){
      input.type = 'divide';
    } else {
    console.log( 'error in onclick divide');
    }
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
    } else {
      console.log( 'error in onclick minus');
    } console.log(type);
  });

  $('#plus').on('click', function(){
    console.log( 'plus button clicked' );
    if ( input.type === '' ){
      input.type = 'plus';
    } else {
      console.log( 'error in onclick plus');
  } console.log(type);
  });

  input = {
    x: '',
    y: '',
    type: ''
  };
});


var startServerSide = function( inputToSend ){
  console.log( 'in startServerSide function ');
  $.ajax({
    type: "POST",
    url: '/moduleAddress',
    data: inputToSend,
    success: function( data ) {
      console.log( 'success: ' + data );
      spitOutAnswer( data );
      // returnAnswer( data );
    }, //end success
    error: function() {
      alert( 'Error accessing' );
    }
  }); //end of ajax call
}; //end of startServerSide function

var spitOutAnswer = function( data ){
  console.log( 'in spitOutAnswer, data: ' + data);
  var answer = document.createElement( 'p' );
   answer.textContent = "The answer is " + data;
   document.getElementById('result').innerHTML = '';
    //  document.getElementById(    )
   $('#result').append( answer );
};

$('#clear').on( 'click', function(){
  $('#result').empty();
  $( input.x ).empty();
  console.log( input.x );
  // $('#result').clear();
});
//
// function returnAnswer( output ) {
// console.log( 'in returnAnswer: ' + returnAnswer );
//   var answer = document.createElement( 'p' );
//   answer.textContent = "The answer is " + output;
//   $('#outputDiv').append( 'answer' );
// }
