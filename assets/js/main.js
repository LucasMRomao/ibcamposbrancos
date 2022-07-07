$(function(){
    let loadPage = function (pagina) {
        $("#principal").load(pagina);
        $(".nbMenu>.active").removeClass("active");
        //$(".niContato").addClass("active");

        switch(pagina){
            case 'home.html': $(".niHome").addClass("active"); break;
            case 'calendario.html': $(".niCalendario").addClass("active"); break;
            case 'pedido_oracao.html': $(".niPedido").addClass("active"); break;
        }
    }

    $("#principal").load("home.html");
    $("#lHome").click(() => loadPage("home.html"));
    $("#lCalendario").click(() => loadPage("calendario.html"));
    $("#lPedido").click(() => loadPage("pedido_oracao.html"));
    
});