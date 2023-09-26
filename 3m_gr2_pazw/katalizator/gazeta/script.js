$( document ).ready(function(){

    $("nav").hide();
    $(".box").hide();

    $(".search").click(function(){
        $(".box").toggle("fast");
    });

    $("#otw").click(function(){
        $("#otwA").toggle("slow");
    });

    $("#glo").click(function(){
        $("#gloA").toggle("slow");
    });

    $("#pie").click(function(){
        $("#pieA").toggle("slow");
    });

    $("#war").click(function(){
        $("#warA").toggle("slow");
    });

    $(".hamburger").click(function(){
        $("nav").slideToggle("slow");
    });

});
