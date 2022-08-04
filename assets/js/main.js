$(function(){
    let loadPage = function (pagina, e) {
        $("#principal").load(pagina);
        $(".nbMenu>.active").removeClass("active");
        $(".ni" + e).addClass("active");
        console.log("Carregar página: " + pagina);
    }

    $("#principal").load("home.html");
    $("#lHome").click(() => loadPage("home.html", "Home"));
    //$("#lCalendario").click(() => loadPage("calendario.html", "Calendario"));
    $("#lCultos").click(() => loadPage("cultos.html", "Cultos"));
    $("#lCelulas").click(() => loadPage("celulas.html", "Celulas"));
    $("#lPedido").click(() => loadPage("pedido_oracao.html", "Pedido"));
    $("#lTestemunho").click(() => loadPage("testemunho.html", "Testemunho"));

    const firebaseConfig = {
        apiKey: "AIzaSyC_Lz-HIXHPz90MM_8vERto3dUK1rGts44",
        authDomain: "igreja-batista-campos-brancos.firebaseapp.com",
        databaseURL: "https://igreja-batista-campos-brancos-default-rtdb.firebaseio.com",
        projectId: "igreja-batista-campos-brancos",
        storageBucket: "igreja-batista-campos-brancos.appspot.com",
        messagingSenderId: "724470922283",
        appId: "1:724470922283:web:fcf1eaf1f43df1d48dfe6e",
        measurementId: "G-WKZFS0PDDY"
    };

    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();

    db.collection("cultos").orderBy("data", "desc").limit(1).get().then((data) => {
        let url_iframe = data.docs[0].data().url_iframe;

        let $html = "<iframe src='";
        $html += url_iframe;
        $html += "' width='500' height='281' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>";

        $("#divCulto").html($html);
    });

    db.collection("versiculo_semanal").onSnapshot((data) => {
        data.docs.map((val) => { //Similar ao foreach do PHP
            let livro = val.data().livro;
            let capitulo = val.data().capitulo;
            let versiculo = val.data().versiculo;
            let descricao_versiculo = val.data().descricao_versiculo;
            console.log(livro);
            console.log(capitulo);
            console.log(versiculo);
            console.log(descricao_versiculo);

            $("#sLivro").text(livro);
            $("#sCapitulo").text(capitulo);
            $("#sVersiculo").text(versiculo);
            $("#sDescricaoVersiculo").text(descricao_versiculo);
        });
    });
    
});