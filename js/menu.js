$(document).ready(function(){
    $("#home").mouseover(function() {
        $("#icon_home").attr("src","img/icon_home_black.png");
    });
    $("#home").mouseout(function() {
        $("#icon_home").attr("src","img/icon_home.png");
    });
    
    $("#icon_linkedin").mouseover(function() {
        $("#icon_linkedin").attr("src","img/icon_linkedin.png");
    });
    $("#icon_linkedin").mouseout(function() {
        $("#icon_linkedin").attr("src","img/icon_linkedin_black.png");
        $("#s1").remove();
    });
    $("#icon_gmail").mouseover(function() {
        $("#icon_gmail").attr("src","img/icon_gmail.png");
    });
    $("#icon_gmail").mouseout(function() {
        $("#icon_gmail").attr("src","img/icon_gmail_black.png");
    });
    $("#icon_github").mouseover(function() {
        $("#icon_github").attr("src","img/icon_github.png");
    });
    $("#icon_github").mouseout(function() {
        $("#icon_github").attr("src","img/icon_github_black.png");
    });
    $("#icon_cv").mouseover(function() {
        $("#icon_cv").attr("src","img/icon_cv.png");
    });
    $("#icon_cv").mouseout(function() {
        $("#icon_cv").attr("src","img/icon_cv_black.png");
    });
});

