$(document).ready(function(){
    var s1 = "<p id=s1>Appended text</p>";
    $("#icon_linkedin").mouseover(function() {
        $("#icon_linkedin").attr("src","img/icon_linkedin.png");
        $("#linkedin").append(s1);
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
    $("#icon_phone").mouseover(function() {
        $("#icon_phone").attr("src","img/icon_phone.png");
    });
    $("#icon_phone").mouseout(function() {
        $("#icon_phone").attr("src","img/icon_phone_black.png");
    });
});

