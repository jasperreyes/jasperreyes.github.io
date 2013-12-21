$(document).ready(function() {
    $('a').mouseover( function() { 
          $(this).css("color", "white");
    });
    $('a').mouseout( function() { 
          $(this).css("color", "#66cc33");
    });
});