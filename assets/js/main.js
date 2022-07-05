$(function(){
    let loadPage = function (pagina) {
        $("#principal").load(pagina);
        $(".nbMenu>.active").removeClass("active");
        $(".niContato").addClass("active");
    }

    $("#principal").load("home.html");
    $("#lHome").click(() => loadPage("home.html"));
    $("#lCalendario").click(() => loadPage("calendario.html"));
    $("#lPedido").click(() => loadPage("pedido_oracao.html"));

    
});