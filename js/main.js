
$(document).ready(function() {
    
    /* show navbar button */
    $("i.icon").on("click", function(){
        $(".nav-list").slideToggle();
        
    });
    
    // countTo plugin Statistic
    function count() {
        $(".count").countTo();
        $(window).off('scroll');
    }
    var stat = $("#statistic").offset().top - 300;

    /* change nav color wen window scrolling */
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if (sc > 10) {
            $("header").addClass("sticky");
        }
        else {
            $("header").removeClass("sticky");
        }
        
        if (sc > stat) {
            count();
        }
        
        // Scroll Top fadeIn & fadeOut
        if (sc > 400) {
            $(".scroll-top").fadeIn();
        }else {
            $(".scroll-top").fadeOut();
        }
    });
    
    /* change portfolio background links */
    
    $("#portfolio .my-btns .my-btn").on("click", function(){
        
        $(this).addClass("active-btn");
        $(this).siblings().removeClass("active-btn");
        
        var Filter = $(this).attr('id');
        if (Filter === 'all') {
            $("#portfolio .images .img").fadeIn();
        } else {
            $("#portfolio .images .img").hide();
            $("#portfolio .images").contents().filter("." + Filter ).fadeIn();
        }
        
    });
    
        // owl carousel Team Section
        $('.team-content.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            responsive:{
                0:{items:1},
                400:{items:2},
                600:{items:3},
                800:{items:4},
            }
        });
        
        
    // Shoose-Us change content panel
    $(".c-panel .subnav li").click(function(){
        $(this).addClass("active-btn");
        $(this).siblings().removeClass("active-btn");
        
        var p = $(this).attr('id');
        console.log(p);
        $(".panel-content").contents().filter("." + p).fadeIn().siblings().hide();
        
    });
    
        // owl carousel Testimorial
        $('.test-content.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            dots:true,
            responsive:{
                0:{items:1},
                600:{items:2},
                800:{items:3},
            }
        });
    
    // onClick on Scroll Top 
    $('.scroll-top').click(function() {
        $("body,html").animate({
            scrollTop : 0
        },500);
    });
    
    // Smooth Sctool
    $('.nav-list .link a').click(function() {
        $("body,html").animate({
            scrollTop : $($(this).attr("href")).offset().top - 80
        },500);
    });
});

