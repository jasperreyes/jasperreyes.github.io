/*eslint-env jquery*/
$(document).ready(function(){
// nav bar show/hide controls
// $(window).scroll(function() {
//     if ($(window).scrollTop() > 400) {
//         $('nav').addClass('showNav');
//         $('nav').removeClass('hideNav');
//     } else {
//         $('nav').removeClass('showNav');
//         $('nav').addClass('hideNav');
//     }
// });
// initial hiding
$("#addWorkSection").hide(),$("#hideBtn").hide(),$("#addWorkSectionDivider").hide(),
// show btn logic
$("#showBtn").click(function(){$("#addWorkSection").show(),$("#hideBtn").show(),$("#showBtn").hide(),$("#addWorkSectionDivider").show()}),
// hide btn logic
$("#hideBtn").click(function(){$("#addWorkSection").hide(),$("#hideBtn").hide(),$("#showBtn").show(),$("#addWorkSectionDivider").hide()}),$(".showHideBtn").click(function(){$(this).hasClass("showing")?($(this).removeClass("showing"),$(this).siblings(".addPrjBox").css("display","none"),$(this).html("Show more")):($(this).addClass("showing"),$(this).siblings(".addPrjBox").css("display","flex"),$(this).html("Show less"),$(this).css("font-family","Open Sans"))})});