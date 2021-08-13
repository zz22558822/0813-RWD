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

});