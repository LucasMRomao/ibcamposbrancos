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
                    alert("Logado!");
                }else{
                    alert("Erro ao logar!");
                }
            });
        });
    });
});