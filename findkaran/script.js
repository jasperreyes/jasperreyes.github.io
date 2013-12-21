//Randomizer that accounts for browser size----------------------------------------
//Special thanks to Tom Benneche for his JS wizardry

$(document).ready(function(){
    var topDist = Math.random()*(window.innerHeight-410);
    var topPx = topDist.toString() + "px";
    console.log(topDist);
    console.log(topPx);
    $('#level2').css("top", topPx);
    var rightDist = Math.random()*(window.innerWidth-410);
    console.log(rightDist);
    var rightPx = rightDist.toString() + "px";
    console.log(rightPx);
    $('#level2').css("right", rightPx);
});

//button that makes black screen disappear to reveal game
$(document).ready(function() {
    $('#playbutton').click(function() {
        $('#playbutton').hide();
        $('#startpage').hide();
    });
});

//button to bring user to start page
$(document).ready(function() {
    $('#nextbutton').click(function() {
        $('#nextbutton').hide();
        $('#intropage').hide();
    });
});

//makes leaf appear/disappear on hover
$(document).ready(function() {
    $("#karan").mouseenter(function(){
        $('#leaf').css('visibility', 'visible');
    });
    $("#karan").mouseleave(function(){
        $('#leaf').css('visibility', 'hidden');
    });
            karanaudio.play();
});

//button that is Karan, click reveals win page
$(document).ready(function() {
    $("#leaf").click(function(){
        $('#winpage').css('visibility', 'visible');

    });
});

//button that refreshes page to bring user to start
$(document).ready(function() {
    $('#playagainbutton').click(function() {
        location.reload(true);
    });
});


//Game Audio Code------------------------------------
$(document).ready(function() {
    $("#level1").hover(function(){
    	level1audio.play();
    	level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();        
    	karanaudio.pause();
    	},
	function(){
		level1audio.load();
    });
});

$(document).ready(function() {
    $("#level2").mouseenter(function(){
    	level1audio.pause();
    	level2audio.play();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
    	karanaudio.pause();
    });

    $("#level2").mouseleave(function(){
    	level1audio.play();
    	level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
    	karanaudio.pause();
    });
});

$(document).ready(function() {
    $("#level3").mouseenter(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.play();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });

    $("#level3").mouseleave(function(){
        level1audio.pause();
        level2audio.play();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });
});

$(document).ready(function() {
    $("#level4").mouseenter(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.play();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });

    $("#level4").mouseleave(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.play();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });
});

$(document).ready(function() {
    $("#level5").mouseenter(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.play();
        level6audio.pause();  
        karanaudio.pause();
    });

    $("#level5").mouseleave(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.play();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });
});

$(document).ready(function() {
    $("#level6").mouseenter(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.play();  
        karanaudio.pause();
    });

    $("#level6").mouseleave(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.play();
        level6audio.pause();  
        karanaudio.pause();
    });
});

$(document).ready(function() {
    $("#karan").mouseenter(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });

    $("#karan").mouseleave(function(){
        level1audio.pause();
        level2audio.pause();
        level3audio.pause();
        level4audio.pause();
        level5audio.pause();
        level6audio.pause();  
        karanaudio.pause();
    });
});
