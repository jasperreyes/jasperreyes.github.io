$(document).ready(function(){function n(){o=Math.floor(3*Math.random())}function t(){$(".btn").removeClass("trigger")}function a(){n(),console.log("Random value is "+o),0===o?$("#btn1").addClass("trigger"):1===o?$("#btn2").addClass("trigger"):$("#btn3").addClass("trigger")}var o;$("#assignBtn").click(function(){a()}),$("#resetBtn").click(function(){t()})});