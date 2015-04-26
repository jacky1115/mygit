$(function(){

    $('.chapter-title').hover(function(){
        $(this).addClass("titleClass");
    },function(){
        $(this).removeClass('titleClass');
    });
})