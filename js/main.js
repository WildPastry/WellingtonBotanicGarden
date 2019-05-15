/*jslint browser:true */

//LOAD JAVASCRIPT
$(document).ready(function () {

    //    DESKTOP AND TABLET SCROLLING FUNCTIONS
    if (window.matchMedia("(min-width: 861px)").matches) {
        $("#about").click(function () {
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top - 98
            }, 400);
        });
        $("#features").click(function () {
            $('html, body').animate({
                scrollTop: $("#featuresSection").offset().top - 98
            }, 400);
        });
        $("#cafes").click(function () {
            $('html, body').animate({
                scrollTop: $("#cafesSection").offset().top - 98
            }, 400);
        });
        $("#events").click(function () {
            $('html, body').animate({
                scrollTop: $("#eventsSection").offset().top - 98
            }, 400);
        });
        $("#contact").click(function () {
            $('html, body').animate({
                scrollTop: $("#contactSection").offset().top - 98
            }, 400);
        });
        $("#brand").click(function () {
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top - 1200
            }, 400);
        });
    } else { /* the viewport is less than 861 pixels wide */
        $("#about").click(function () {
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top - 160
            }, 400);
        });
        $("#features").click(function () {
            $('html, body').animate({
                scrollTop: $("#featuresSection").offset().top - 160
            }, 400);
        });
        $("#cafes").click(function () {
            $('html, body').animate({
                scrollTop: $("#cafesSection").offset().top - 160
            }, 400);
        });
        $("#events").click(function () {
            $('html, body').animate({
                scrollTop: $("#eventsSection").offset().top - 160
            }, 400);
        });
        $("#contact").click(function () {
            $('html, body').animate({
                scrollTop: $("#contactSection").offset().top - 160
            }, 400);
        });
        $("#brand").click(function () {
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top - 1200
            }, 400);
        });
    }

    //    MOBILE SCROLLING FUNCTIONS
    if (window.matchMedia("(min-width: 580px)").matches) {} else { /* the viewport is less than 861 pixels wide */
        $("#aboutMobile").click(function () {
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top
            }, 400);
        });
        $("#featuresMobile").click(function () {
            $('html, body').animate({
                scrollTop: $("#featuresSection").offset().top
            }, 400);
        });
        $("#cafesMobile").click(function () {
            $('html, body').animate({
                scrollTop: $("#cafesSection").offset().top
            }, 400);
        });
        $("#eventsMobile").click(function () {
            $('html, body').animate({
                scrollTop: $("#eventsSection").offset().top
            }, 400);
        });
        $("#contactMobile").click(function () {
            $('html, body').animate({
                scrollTop: $("#contactSection").offset().top
            }, 400);
        });
        $("#brandMobile").click(function () {
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top - 1200
            }, 400);
        });
    }

    //CLICK BACK TO TOP BUTTON
    $("#backTop").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top - 1200
        }, 400);
    });

    //SHOW/HIDE BACK TO TOP BUTTON   
    $(document).scroll(function () {
        var $scrollPos = $(document).scrollTop();

        if ($scrollPos < 250) {
            $(".backTop").removeClass('showBackTop');
        } else {
            $(".backTop").addClass('showBackTop');
        }
    }).scroll();

    //CHANGE NAV BAR COLOUR   
    $(document).scroll(function () {
        var $scrollPos = $(document).scrollTop();

        if ($scrollPos < 250) {
            $("#nav").removeClass('navDgreen');
            $("#nav").addClass('navDgreenA');
        } else {
            $("#nav").removeClass('navDgreenA');
            $("#nav").addClass('navDgreen');
        }
    }).scroll();
});
