$(document).ready(function() {

  //defining characters in grid format
  function number1() { $('#1a, #1b, #1c, #2c, #3c, #4c, #5a, #5b, #5c, #5d, #5e').addClass('active'); }

  function number2() { $('#1a, #1b, #1c, #1d, #2e, #3b, #3c, #3d, #4a, #5a, #5b, #5c, #5d, #5e').addClass('active'); }

  function number3() { $('#1a, #1b, #1c, #1d, #2e, #3b, #3c, #3d, #4e, #5a, #5b, #5c, #5d').addClass('active'); }

  function number4() { $('#1a, #1d, #2a, #2d, #3a, #3b, #3c, #3d, #3e, #4d, #5d').addClass('active'); }

  function number5() { $('#1a, #1b, #1c, #1d, #1e, #2a, #3a, #3b, #3c, #3d, #4e, #5a, #5b, #5c, #5d').addClass('active'); }

  function number6() { $('#1b, #1c, #1d, #1e, #2a, #3a, #3b, #3c, #3d, #4a, #4e, #5b, #5c, #5d').addClass('active'); }

  function number7() { $('#1a, #1b, #1c, #1d, #1e, #2e, #3d, #4c, #5b').addClass('active'); }

  function number8() { $('#1b, #1c, #1d, #2a, #2e, #3a, #3b, #3c, #3d, #3e, #4a, #4e, #5b, #5c, #5d').addClass('active'); }

  function number9() { $('#1b, #1c, #1d, #2a, #2e, #3b, #3c, #3d, #3e, #4e, #5a, #5b, #5c, #5d').addClass('active'); }

  function number0() { $('#1b, #1c, #1d, #2a, #2e, #3a, #3e, #4a, #4e, #5b, #5c, #5d').addClass('active'); }

  function questionMark() { $('#1b, #1c, #1d, #2a, #2e, #3c, #3d, #5c').addClass('active'); }

  //used to reset timer
  var timeOutVariable;

  //when user presses a key
  document.onkeydown = keyPressed;
  
  //runs when a key is pressed
  function keyPressed(key) {

    //reset the dot grid
    $('.dot').removeClass('active');

    //display the corresponding character in dot form
    if (key.keyCode == '49') { number1(); }
    else if (key.keyCode == '50') { number2(); } 
    else if (key.keyCode == '51') { number3(); }
    else if (key.keyCode == '52') { number4(); }
    else if (key.keyCode == '53') { number5(); }
    else if (key.keyCode == '54') { number6(); }
    else if (key.keyCode == '55') { number7(); }
    else if (key.keyCode == '56') { number8(); }
    else if (key.keyCode == '57') { number9(); }
    else if (key.keyCode == '48') { number0(); }

    //display question mark for undefined characters
    else { questionMark(); }

    //resets the timer variable  
    clearTimeout(timeOutVariable);

    //reset the grid after one second
    timeOutVariable = setTimeout(function() {
      $('.dot').removeClass('active');
    }, 1000);
  }
});