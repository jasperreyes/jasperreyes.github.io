function drawCircle(){var n=50,a=70;c.fillRect(30,30,n+=50,a+=50)}var canvas=document.querySelector("canvas");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var c=canvas.getContext("2d");$(window).click(function(){drawCircle()});