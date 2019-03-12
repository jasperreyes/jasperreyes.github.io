$(document).ready(function() {


// CHAT RESPONSE AND CHOICE GENERATION

  // if a message is short
  // then 
    // display pending animation for 1000m, hide
    // display bot response



  function createBotResponse(botResponseText, messageLength) {

    // generate pending animation
    messageLength = ['short', 'medium', 'long'];
    var pendingDuration;

    // set appropriate duration of pending animation based on message length
    if (messageLength === 'short') {
      pendingDuration = 4000;
    }

    if (messageLength === 'medium') {
      pendingDuration = 8000;
    }

    if (messageLength === 'long') {
      pendingDuration = 12000;
    }

    // generate pending animation DOM Element
    function generatePendingAnimation () {
      $("<div>", {class: "response botResponse"}).append(
        $("<div>", {class: "avatar botAvatar"}).append(),
        $("<div>", {class: "bubble botBubble"}).append(
          $("<div", {class: "pendingDot"}).append()
        )
      ).appendTo("#chatResponsesBox").hide().fadeIn(100, "swing").delay(pendingDuration).hide()
    }

    // generate botResponse DOM element
    function generateBotResponse () {
      $("<div>", {class: "response botResponse"}).append(
        $("<div>", {class: "avatar botAvatar"}).append(),
        $("<div>", {class: "bubble botBubble"}).append(
          $("<span>").text(
              botResponseText
          )
        )
      ).appendTo("#chatResponsesBox").hide().fadeIn(100, "swing")   
    }


    // run functions
    generatePendingAnimation();
    setTimeout(function() {
      generateBotResponse();
    }, pendingDuration);

  }




  // generate choiceBox
  function createChoiceBox(choiceOneText, choiceOneID, choiceTwoText, choiceTwoID, choiceThreeText, choiceThreeID) {
    $("<div>", {class: "choiceBox"}).append(
      $("<div>", {class: "choice", id: choiceOneID}).append(
        $("<span>").text(
          choiceOneText
        )
      ),
      $("<div>", {class: "choice", id: choiceTwoID}).append(
        $("<span>").text(
          choiceTwoText
        )
      ),
      $("<div>", {class: "choice", id: choiceThreeID}).append(
        $("<span>").text(
          choiceThreeText
        )
      )  
    ).appendTo("#chatResponsesBox").hide().fadeIn()
  }

  // when a choice is clicked
  $(document).on('click','.choice',function(e) {

    // ONE

    // get text from clicked choice
    var clickedChoiceText = $(e.target).text();

    // convert user choice selection to user response
    function convertChoiceToUserResponse() {

      // generate userResponse DOM element
      $("<div>", {class: "response userResponse"}).append(
        $("<div>", {class: "bubble userBubble"}).append(
          $("<span>").text(
            // use text from clicked choice as content
            clickedChoiceText
          )
        ),
        $("<div>", {class: "avatar userAvatar"}).append()
      ).appendTo("#chatResponsesBox").hide().fadeIn()
    }

    convertChoiceToUserResponse();

    // scroll to bottom of chat response box
    $('#chatResponsesBox').scrollTop($('#chatResponsesBox')[0].scrollHeight);

    // remove the choice box
    $('.choiceBox').remove();

  })





  // INITIAL LOAD
  $('#chatCanvas').hide();
  $('#chatToggleBtn').addClass('chatToggleBtnInactive');
  
  var chatSessionInitiated = 0;

  function clearBot() {
    chatSessionInitiated = 0;

    // clear existing content
    $('.userResponse').remove();
    $('.botResponse').remove();
    $('.choiceBox').remove();
  }

  function sendInitialMessages() {
    // activate chat session
    chatSessionInitiated = 1;

    createBotResponse("This is a bot response", 2);

    // send initial messages
    // setTimeout(function() {
    //   createBotResponse("Hey there! I'm JasperBot, a virtual version of the human Jasper. I can help provide more information about Jasper in an interactive way.", messageLength[0]);
    // }, 1000);

    // setTimeout(function() {
    //   createBotResponse("Choose an option below to get started:");
    // }, 2000);

    // setTimeout(function() {
    //   createChoiceBox("UX experience", "UXexperience", "hobbies", "hobbies", "useless but interesting info", "useless");
    // }, 3000);
  }


  // RESET CHAT
  $('#resetBtn').click(function() {
    clearBot();
    sendInitialMessages();
  });


  $('#chatToggleBtn').click(function() {

    // HIDE / SHOW CANVAS
    $('#chatCanvas').fadeToggle(300);


    // HIDE / SHOW TOGGLE STATE
    if ($('#chatToggleBtn').hasClass('chatToggleBtnInactive')) {
      $('#chatToggleBtn').fadeOut().removeClass('chatToggleBtnInactive');
      $('#chatToggleBtn').fadeIn().addClass('chatToggleBtnActive');

      if (chatSessionInitiated === 0) {
        sendInitialMessages();
      }
    }
    
    else {
      $('#chatToggleBtn').removeClass('chatToggleBtnActive');
      $('#chatToggleBtn').addClass('chatToggleBtnInactive');
    }

  });









});

// TO DO

// add restart
  // function restartChat() {
  //   createBotResponse("Hey there! I'm JasperBot, a virtual version of the human Jasper. I can help provide more information about Jasper in an interactive way.");
  //   createBotResponse("Choose an option below to get started:");
  //   createChoiceBox("UX experience", "UXexperience", "hobbies", "hobbies", "useless but interesting info", "useless");
  // }

// create 'pending' animation
// figure out structure of menu
// figure out how to dynamically generate responses using JS instead of creating everything upfront and hiding/showing
// add timestamps
// add name variable


