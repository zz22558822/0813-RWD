$(document).ready(function () {

    // Lightbox 燈箱效果
    lightbox.option({
    resizeDuration: 100,
    wrapAround: true,
    });
    
    // TOP按鈕
    $('.top-btn a').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },350);
    });

    // 漢堡選單
    $('.hamburger-menu a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fa-bars').toggleClass('fa-times').parent().siblings('.menu').toggleClass('menu-open')
    });

    // 愛心按鈕
    $('.fa-heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fas').toggleClass('far')
    });

});