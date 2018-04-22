$(document).ready(function() {


// TO DO

  // research


  
    // figure out how to get guest name

    var guestName;

    $( "input" ).keyup(function() {
      var value = $( this ).val();
      $( "p" ).text( value );
    }).keyup();



    // how to scroll to bottom on message response but before options 



// get timestamp
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getNewTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var time = (h + ":" + m);

  time = time.split(':'); // convert to array

  // fetch
  var hours = Number(time[0]);
  var minutes = Number(time[1]);

  // calculate
  var timeValue;

  if (hours > 0 && hours <= 12)
  {
    timeValue= "" + hours;
  } else if (hours > 12)
  {
    timeValue= "" + (hours - 12);
  }
  else if (hours === 0)
  {
    timeValue= "12";
  }
   
  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  timeValue += (hours >= 12) ? "pm" : "am";  // get AM/PM

  // show
  console.log("the time value is " + timeValue);
}


  // write content
  // decide on whether or not to display cards

  // design and develop
    // add animation to chat bubble display
    // add timestamp to chat bubbles
    // add avatar to chat bubbles
    // get guest's name and add to chat bubbles
    // DONE design 'responding' animation
    // design header
    // design global options

      // end this chat now

          // see statistics on previous chats
          // 


 // display telemetry
    // most common first paths
    // most common second paths
    // number of chats executed
    // names list and quantity of unique names
    // number of turns per session

 // display names
    // if user wishes to see names, must agree to have names displayed





// if question button is clicked, then 

  // jasper typing animation appears for x secs
  // jasper response appears
  // follow up questions appears
  // global questions appear (minus questions already asked)

  $('#optionA').hide();
  $('#optionAresponse').hide();
  $('#optionB').hide();
  $('#optionBresponse').hide();
  $('#optionC').hide();
  $('#optionCresponse').hide();
  $('#optionD').hide();
  $('#optionDresponse').hide();
  $('.respondingAnimation').hide();

  // script for clicking option A
  $('#optionAbtn').click(function() {

    getNewTime();

    // remove option A from option box
    $(this).fadeOut(100);

    // hide options box
    $('.optionsBox').fadeOut(100, function() {

      // turn the option into a chat bubble
      $('#optionA').appendTo('#siteBox');
      $('#optionA').fadeIn(0, function() {

        // show 'responding' animation
        $('.respondingAnimation').delay(2000).appendTo('#siteBox');
        $('.respondingAnimation').fadeIn(100, function() {

          // hide 'responding' animation
          $('.respondingAnimation').delay(4000).fadeOut(100, function() {

            // give a response
            $('#optionAresponse').appendTo('#siteBox');
            $('#optionAresponse').fadeIn(100, function() {

              // redisplay the option box without the selected option
              $('.optionsBox').delay(2000).fadeIn(100);
              $('.optionsBox').appendTo('#siteBox');
            });
          });
        });
      });
    });
  });



  // script for clicking option B
  $('#optionBbtn').click(function() {

    // remove option B from option box
    $(this).fadeOut(100);

    // question box hides
    $('.optionsBox').fadeOut(100, function() {

      // turn the option into a chat bubble
      $('#optionB').appendTo('#siteBox');
      $('#optionB').fadeIn(0, function() {

        // show 'responding' animation
        $('.respondingAnimation').delay(2000).appendTo('#siteBox');
        $('.respondingAnimation').fadeIn(100, function() {

          // hide 'responding' animation
          $('.respondingAnimation').delay(4000).fadeOut(100, function() {

            // give a response
            $('#optionBresponse').appendTo('#siteBox');
            $('#optionBresponse').fadeIn(100, function() {

              // redisplay the option box without the selected option
              $('.optionsBox').delay(2000).fadeIn(100);
              $('.optionsBox').appendTo('#siteBox');
            });
          });
        });
      });
    });
  });

  // script for clicking option C
  $('#optionCbtn').click(function() {

    // remove option B from option box
    $(this).fadeOut(100);

    // question box hides
    $('.optionsBox').fadeOut(100, function() {

      // turn the option into a chat bubble
      $('#optionC').appendTo('#siteBox');
      $('#optionC').fadeIn(0, function() {

        // show 'responding' animation
        $('.respondingAnimation').delay(2000).appendTo('#siteBox');
        $('.respondingAnimation').fadeIn(100, function() {

          // hide 'responding' animation
          $('.respondingAnimation').delay(4000).fadeOut(100, function() {

            // give a response
            $('#optionCresponse').appendTo('#siteBox');
            $('#optionCresponse').fadeIn(100, function() {

              // redisplay the option box without the selected option
              $('.optionsBox').delay(2000).fadeIn(100);
              $('.optionsBox').appendTo('#siteBox');
            });
          });
        });
      });
    });
  });

  // script for clicking option D
  $('#optionDbtn').click(function() {

    // remove option D from option box
    $(this).fadeOut(100);

    // question box hides
    $('.optionsBox').fadeOut(100, function() {

      // turn the option into a chat bubble
      $('#optionD').appendTo('#siteBox');
      $('#optionD').fadeIn(0, function() {

        // show 'responding' animation
        $('.respondingAnimation').delay(2000).appendTo('#siteBox');
        $('.respondingAnimation').fadeIn(100, function() {

          // hide 'responding' animation
          $('.respondingAnimation').delay(4000).fadeOut(100, function() {

            // give a response
            $('#optionDresponse').appendTo('#siteBox');
            $('#optionDresponse').fadeIn(100, function() {

              // redisplay the option box without the selected option
              $('.optionsBox').delay(2000).fadeIn(100);
              $('.optionsBox').appendTo('#siteBox');
            });
          });
        });
      });
    });
  });
});

