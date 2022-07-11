$(function(){

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

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();

    $("#bLogar").click(function(){
        let user = $("#iUsuario").val();
        let password = $("#iSenha").val();

        db.collection('credenciais_login').onSnapshot((data) => {
            data.docs.map((val) => { //Similar ao foreach do PHP
                let dbUser = val.data().user;
                let dbPassword = val.data().password;

                if(user == dbUser && password == dbPassword){
                    
                    $("#dMain").html("");
                    $("#dMain").html("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#modalNovaSenha'>Alterar senha</button>");

                    db.collection('pedidos').onSnapshot((dataPedido) => {
                        dataPedido.docs.map((val) => {
                            let nome = val.data().nome;
                            let whatsapp = val.data().whatsapp;
                            let descricao = val.data().descricao_pedido;
                            let publico = val.data().publico;
                            
                            let $pedido = '';

                            publico ? $pedido += "<div class='alert alert-success' role='alert' style='margin-top: 10px;'>" : $pedido += "<div class='alert alert-warning' role='alert' style='margin-top: 10px;'>";
                            $pedido += "<b>" + nome + "</b><br/>";
                            $pedido += "<i>" + whatsapp + "</i><br/>";
                            $pedido += descricao;    
                            $pedido += "</div>";

                            $("#dMain").html($("#dMain").html() + $pedido);
                        });
                    });

                }else{
                    alert("Erro ao logar!");
                }
            });
        });
    });
});