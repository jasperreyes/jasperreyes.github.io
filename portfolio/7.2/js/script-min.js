$(document).ready(function(){function o(){$("#interactionAddPrjBox").hasClass("hideAddPrjBox")?$("#interactionAddPrjBox").removeClass("hideAddPrjBox"):$("#interactionAddPrjBox").addClass("hideAddPrjBox")}function n(){$("#otherDesignAddPrjBox").hasClass("hideAddPrjBox")?$("#otherDesignAddPrjBox").removeClass("hideAddPrjBox"):$("#otherDesignAddPrjBox").addClass("hideAddPrjBox")}function e(){$("#photoVideoAddPrjBox").hasClass("hideAddPrjBox")?$("#photoVideoAddPrjBox").removeClass("hideAddPrjBox"):$("#photoVideoAddPrjBox").addClass("hideAddPrjBox")}$(".contentBox").scroll(function(){$(".contentBox").scrollTop()>1?$("nav").addClass("floatingNav"):$("nav").removeClass("floatingNav")}),$("#mobileMenuBtn").click(function(){$("#navMenu").hasClass("showMobileNavMenu")?$("#navMenu").removeClass("showMobileNavMenu"):$("#navMenu").addClass("showMobileNavMenu")}),$("#closeMobileMenuBtn").click(function(){$("#navMenu").removeClass("showMobileNavMenu")}),$("#scrollToBottomBtn").click(function(){$("html, .contentBox").animate({scrollTop:9999},"slow")}),$("#scrollToTopBtn").click(function(){$("html, .contentBox").animate({scrollTop:0},"slow")}),$("#interactionBtn").on("keypress",function(n){13==n.which&&o()}),$("#interactionBtn").click(function(){o()}),$("#otherDesignBtn").on("keypress",function(o){13==o.which&&n()}),$("#otherDesignBtn").click(function(){n()}),$("#photoVideoBtn").on("keypress",function(o){13==o.which&&e()}),$("#photoVideoBtn").click(function(){e()})});