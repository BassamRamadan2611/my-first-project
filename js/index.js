$( function() {
    'use strict';
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth:10,
        cursorradious:0,
        cursorborder:'1px solid #f7600e'
    });



$(".header").height($(window).height());



});
$('.header .arrow i').click(function(){
    $('html , body').animate({ 
        scrollTop :$('.features').offset().top
    },500)
})
$('.hire').click(function(){
    $('html , body').animate({ 
        scrollTop :$('.our-team').offset().top
    },500)
})
$('.work').click(function(){
    $('html , body').animate({ 
        scrollTop :$('.our-works').offset().top
    },500)
})
$('.show-more').click(function(){
    $('.hidden').fadeIn(2000);
})




         function checkClients () {
    if($('.client:first').hasClass('active')){
        $('.testim  .fa-chevron-left').fadeOut();   

    }else{
        $('.testim  .fa-chevron-left').fadeIn();
    }
    if($('.client:last').hasClass('active')){
        $('.testim  .fa-chevron-right').fadeOut();   

    }else{
        $('.testim  .fa-chevron-right').fadeIn();
    }
  
}
checkClients();
   


$('.testim i').click(function(){

if($(this).hasClass('fa-chevron-right')){
$('.testim .active').fadeOut(100,function(){
    $(this).removeClass('active').next('.client').addClass('active').fadeIn();
    checkClients();
})
 
}else{
    $('.testim .active').fadeOut(100,function(){
        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
        checkClients();
    })
  

}
})