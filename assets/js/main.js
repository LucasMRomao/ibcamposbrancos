$(function(){

    $("#principal").load("home.html");
    $("#lHome").click(load("home.html"));
    $("#lCalendario").click(load("calendario.html"));
    $("#lPedido").click(load("pedido_oracao.html"));

    let load = (pagina) => {
        $("#principal").load(pagina);
        $(".nbMenu>.active").removeClass("active");
        $(".niContato").addClass("active");
    }
});