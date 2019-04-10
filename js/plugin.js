$(document).ready(function () {
    
    "use strict";
    
    //nice scroll 
    $("html").niceScroll();

	$('.carousel').carousel(
	    {

		    invertal: 5000
        });

	// Show Color Option div when click on gear

	$(".gear-check").click(function ()
	    {

		    $(".color-option").toggle();
        });
    
    //Change Color theme on Click
    
    var colorLi = $(".color-option ul li");
    
    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#790d80").end()
        .eq(2).css("backgroundColor", "#0d6b15").end()
        .eq(3).css("backgroundColor", "#908c0a").end()
        .eq(4).css("backgroundColor", "#1a0782");
	
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    // space
    
    
    // cashing the scroll top Element
    
    var scrollButton = $("#scroll-top");
    
        $(window).scroll(function ()
        {
                        
            if ($(this).scrollTop() >= 700)
            {
                scrollButton.show();
            }
           else
           {
                scrollButton.hide();
           }
           
        });
        
        // Click on button to Scroll Top 
           scrollButton.click(function ()
        {
                $("html,body").animate({scrollTop : 0},600);
        });
    
    
    
});