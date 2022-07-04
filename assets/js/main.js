$(function(){

    $("#principal").load("home.html");

    $("#lHome").click(function(){
        console.log("Load Home");
        $("#principal").load("home.html");
        $(".nbMenu>.active").removeClass("active");
        $(".niHome").addClass("active");
    })

    $("#lCalendario").click(function(){
        console.log("Load Calendário");
        $("#principal").load("calendario.html");
        $(".nbMenu>.active").removeClass("active");
        $(".niCalendario").addClass("active");
    });

    $("#lPedido").click(function(){
        console.log("Load Pedido Oração");
        $("#principal").load("pedido_oracao.html");
        $(".nbMenu>.active").removeClass("active");
        $(".niContato").addClass("active");
    });
});