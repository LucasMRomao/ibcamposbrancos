$(function(){
    let loadPage = function (pagina, e) {
        $("#principal").load(pagina);
        $(".nbMenu>.active").removeClass("active");
        $(".ni" + e).addClass("active");
    }

    $("#principal").load("home.html");
    $("#lHome").click(() => loadPage("home.html", "Home"));
    $("#lCalendario").click(() => loadPage("calendario.html", "Calendario"));
    $("#lCultos").click(() => loadPage("cultos.html", "Cultos"));
    $("#lPedido").click(() => loadPage("pedido_oracao.html", "Pedido"));
    
});