$(function(){

    $("#principal").load("../../home.html");

    $("#lHome").click(function(){
        $("#principal").load("../../home.html");
        $(".nbMenu>.active").removeClass("active");
        $(".niHome").addClass("active");
    })

    $("#lCalendario").click(function(){
        $("#principal").load("../../calendario.html");
        $(".nbMenu>.active").removeClass("active");
        $(".niCalendario").addClass("active");
    });

    $("#lContato").click(function(){
        $("#principal").load("../../pedido_oracao.html");
        $(".nbMenu>.active").removeClass("active");
        $(".niContato").addClass("active");
    });
});