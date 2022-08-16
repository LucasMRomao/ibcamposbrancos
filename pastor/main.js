var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
var logado = false;

var total_capitulos_livros = [];
var abreviacoes_livros = [];
var versiculos_livro_selecionado = [];

function uploadImagem(foto, contFotos, contCelulas){

    let db = firebase.firestore();
    let storage = firebase.storage();

    const uploadTask = storage.ref(`celulas/arquivo-${contFotos}`).put(foto);

    uploadTask.on('state_change', (snapshot) => {
        /*let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        $("#pEnvioArquivo").val(progress);
        $("#sPorcentagemEnvio").text(Math.round(progress) + "%");*/
    }, (error) =>{
        console.log(error);
    }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
            db.collection("celulas_fotos").add({
                id_celula: contCelulas,
                url_foto: url
            });

            let ariaValueNow = Number($("#pEnvioFoto").attr("aria-valuenow"));
            let ariaValueMax = Number($("#pEnvioFoto").attr("aria-valuemax"));

            ariaValueNow += 1;

            let progresso = Number((ariaValueNow / ariaValueMax) * 100).toFixed(2);

            $("#pEnvioFoto").attr("aria-valuenow", ariaValueNow);
            $("#pEnvioFoto").css("width", progresso + "%");
            $("#pEnvioFoto").text(Math.round(progresso) + "%");

            if(Math.round(progresso) == 100){
                $("#dEnvioConcluido").show('fade');
            }
        });
    });

}

function redefinirSenhaUsuario(userId, user){
    let db = firebase.firestore();
    let confirmaRedefinir = confirm("Deseja redefinir a senha do usuário: " + user + " ?");

    if(confirmaRedefinir){
        db.collection("usuarios").doc(userId).update({password: MD5('1234')});
        alert("Senha do usuário redefinida!");
    }
}

function excluirUsuario(userId, user){
    let db = firebase.firestore();
    let confirmaExcluir = confirm("Deseja excluir o usuário: " + user + " ?");
    
    if(confirmaExcluir){
        db.collection("usuarios").doc(userId).delete();
        alert("Usuário excluído!");
    }
    
}

function fecharProgresso(){
    $("#dEnvioConcluido").hide();
    $("#divEnvioFotos").hide('fade');
}

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

    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.collection("usuarios").onSnapshot((data) => {
        $("#tableUsuarios>tbody").html(""); //Limpa a lista

        data.docs.map((val) => {
            let user = val.data().user;

            let $usuario = '<tr>';
            $usuario += '<td>' + user + '</td>';
            $usuario += '<td>';
            $usuario += '<button class="btn btn-outline-warning btn-sm bRedefinirSenhaUsuario" user-id="' + val.id + '" onclick="redefinirSenhaUsuario(\'' + val.id + '\', \'' + user + '\')">Redefinir senha</button>&nbsp;';
            $usuario += '<button class="btn btn-outline-danger btn-sm bExcluirUsuario" user-id="' + val.id + '" onclick="excluirUsuario(\'' + val.id + '\', \'' + user + '\')">Excluir</button>';
            $usuario += '</td>';
            $usuario += '</tr>';

            $("#tableUsuarios>tbody").append($usuario);
        });
    });

    //Carregamento dos livros da bíblia
    $.ajax({
        url: 'https://www.abibliadigital.com.br/api/books',
        method: 'GET',
        success: function(result){
            for(var i in result){
                total_capitulos_livros[i] = result[i].chapters;
                abreviacoes_livros[i] = result[i].abbrev.pt;
                let option = "<option value='" + i + "'>" + result[i].name + "</option>";
                $("#sNovoLivro").append(option);
            }

            $("#sNovoCapitulo").empty();
            $("#sNovoCapitulo").append("<option></option>");
            //Preenche automaticamente os capítulos do primeiro livro selecionado (Gênesis)
            for(var i=1; i<=total_capitulos_livros[0]; i++){
                let option = "<option value='" + i + "'>" + i + "</option>";
                $("#sNovoCapitulo").append(option);
            }
        }
    });

    //Carregamento dos capítulos quando o livro é selecionado
    $("#sNovoLivro").change(function(){
        let index = $("#sNovoLivro option:selected").val();

        $("#sNovoCapitulo").empty(); //Limpa o select
        $("#sNovoCapitulo").append("<option></option>");

        $("#sNovoVersiculo").empty();
        $("#sNovoVersiculo").append("<option></option>");

        for(var i=1; i<=total_capitulos_livros[index]; i++){
            let option = "<option value='" + i + "'>" + i + "</option>";
            $("#sNovoCapitulo").append(option);
        }

        $("#taNovaDescricao").text("");
    });

    $("#sNovoCapitulo").change(function(){
        let indexLivro = $("#sNovoLivro option:selected").index();
        let capitulo = $("#sNovoCapitulo option:selected").val();
        let abv = abreviacoes_livros[indexLivro];

        $("#sNovoVersiculo").empty();
        $("#sNovoVersiculo").append("<option></option>");
        $("#taNovaDescricao").text("");

        if(capitulo && abv){
            $.ajax({
                url: 'https://www.abibliadigital.com.br/api/verses/nvi/' + abv + '/' + capitulo,
                method: 'GET',
                success: function(result){
                    for(var i in result.verses){
                        versiculos_livro_selecionado[i] = result.verses[i].text;
    
                        let j = Number(i) + Number(1);
                        let option = "<option value='" + j + "'>" + j + "</option>";
                        $("#sNovoVersiculo").append(option);
                    }
                }
            });
        }
    });

    $("#sNovoVersiculo").change(function(){
        let index = $("#sNovoVersiculo option:selected").val() - 1;
        $("#taNovaDescricao").text(versiculos_livro_selecionado[index]);
    });

    $("#modalCadastroUsuarios").click(function(){
        $("#iSenhaNovoUsuario").val('1234'); //Senha padrão
    });

    $("#bSalvarNovoUsuario").click(function(){
        let user = $("#iNomeNovoUsuario").val().toLowerCase();
        let password = $("#iSenhaNovoUsuario").val();

        if(user == ''){
            alert("Insira o nome do novo usuário!");
        }else if(password == ''){
            alert("Insira uma senha para o novo usuário!");
        }else{

            db.collection("usuarios").where("user", "==", user).get().then((data) => {
                if(data.empty){
                    db.collection("usuarios").add({
                        user: user,
                        password: MD5(password)
                    });
        
                    alert("Usuário cadastrado!");
                    $("#iNomeNovoUsuario").val('');
                    $("#iSenhaNovoUsuario").val('1234');
                }else{
                    alert("Nome de usuário já cadastrado!");
                }
            });
        }
    });

    $("#bLogar").click(function(){
        if(logado) return; //Não executar se já estiver logado
        
        let user = $("#iUsuario").val().toLowerCase();
        let password = MD5($("#iSenha").val());

        db.collection('credenciais_login').onSnapshot((data) => {
            data.docs.map((val) => { //Similar ao foreach do PHP
                let dbUser = val.data().user;
                let dbPassword = val.data().password;

                if(user == dbUser && password == dbPassword){
                    
                    logado = true;
                    $("#dMain").load("area_do_pastor.html");

                    db.collection('pedidos').orderBy("data", "desc").onSnapshot((dataPedidos) => {
                        
                        $("#dPedidos").html(""); //Limpa pedidos
                        var contPedidos = 0;

                        dataPedidos.docs.map((val) => {
                            let nome = val.data().nome;
                            let whatsapp = val.data().whatsapp;
                            let descricao = val.data().descricao_pedido;
                            let publico = val.data().publico;
                            let data = '';
                            let lido = val.data().lido;
                            
                            let data_pedido = val.data().data.split(" ")[0];

                            data += data_pedido.split("-")[2];
                            data += "/";
                            data += data_pedido.split("-")[1];
                            data += "/";
                            data += data_pedido.split("-")[0];

                            let $pedido = '';

                            $pedido += "<div class='alert alert-success' role='alert' style='margin-top: 10px;'>";
                            $pedido += "<div class='row'>";
                            $pedido += "<div class='col-1'>";
                            lido ? $pedido += "<a href='#' class='lPedidoNaoLido' pedido-id='" + val.id + "'><img class='img-fluid' src='../assets/img/lido.png' /></a>" : $pedido += "<a href='#' class='lPedidoLido' pedido-id='" + val.id + "'><img class='img-fluid' src='../assets/img/warning.png' /></a>";
                            $pedido += "</div>"; //Close div col-1
                            $pedido += "<div class='col-11'>"
                            $pedido += "<b>" + nome + "</b>";
                            $pedido += "<div style='float: right'><span>" + data + "</span></div>"
                            $pedido += "<br/>";
                            $pedido += "<img style='float: right; width: 3%; height: auto;' src='../assets/img/";
                            publico ? $pedido += "cadeado-aberto.png" : $pedido += "cadeado-fechado.png";
                            $pedido += "' />";
                            $pedido += "<i>" + whatsapp + "</i><br/><br/>";
                            $pedido += descricao;
                            $pedido += "</div>"; //Close div col-11
                            $pedido += "</div>"; //Close div row
                            $pedido += "</div>" //Close div alert

                            $("#dPedidos").html($("#dPedidos").html() + $pedido);
                            contPedidos++;

                            $(".lPedidoLido").click(function(){
                                db.collection("pedidos").doc($(this).attr("pedido-id")).update({lido: true});
                            });

                            $(".lPedidoNaoLido").click(function(){
                                db.collection("pedidos").doc($(this).attr("pedido-id")).update({lido: false});
                            });
                        });

                        $("#sTotalPedidos").text(contPedidos);
                    });

                }else{
                    alert("Erro ao logar!");
                }
            });
        });
    });

    $("#bSalvarNovaSenha").click(function(){
        if($("#iNovaSenha").val() == ''){
            alert("Campo senha não pode estar em branco!");
            return false; //Cancela o dismiss do Modal
        }else{
            let novaSenha = $("#iNovaSenha").val();
            //db.collection("credenciais_login").doc("f0LLkbq5FaeQmQIchvQO").set({user: 'allan', password: MD5(novaSenha)});
            db.collection("credenciais_login").doc("f0LLkbq5FaeQmQIchvQO").update({password: MD5(novaSenha)});
            console.log("senha alterada com update");
            alert("Senha alterada com sucesso!");
            $("#iNovaSenha").val('');
        }
    });

    $("#bCancelarNovaSenha").click(function(){
        $("#iNovaSenha").val('');
    });

    $("#bSalvarNovoVersiculo").click(function(){
        let livro = $("#sNovoLivro option:selected").text();
        let capitulo = $("#sNovoCapitulo option:selected").text();
        let versiculo = $("#sNovoVersiculo option:selected").text();
        let descricao_versiculo = $("#taNovaDescricao").text();

        if(livro == ''){
            alert("Por favor, selecione um livro!");
            return false;
        }else if(capitulo == ''){
            alert("Por favor, selecione um capítulo!");
            return false;
        }else if(versiculo == ''){
            alert("Por favor, selecione um versículo!");
            return false;
        }else{
            db.collection("versiculo_semanal").doc("tXDk9jv0SOvX4MF5Muho").update({
                livro: livro,
                capitulo: capitulo,
                versiculo: versiculo,
                descricao_versiculo: descricao_versiculo
            });

            alert("Versículo atualizado!");
        }
    });

    /*$("#bCancelarNovoVersiculo").click(function(){
        $("#iNovoLivro").val('');
        $("#iNovoCapitulo").val('');
        $("#iNovoVersiculo").val('');
        $("#taNovaDescricao").val('');
    });*/

    $("#bSalvarNovaCelula").click(() => {

        if($("#iDescricaoNovaCelula").val() == ''){
            alert("Insira uma descrição para a célula!");
            return false;
        }else if($("#iDataNovaCelula").val() == ''){
            alert("Insira uma data válida!");
            return false;
        }else if($("#iFotosCelula")[0].files.length == 0){
            alert("Selecione ao menos uma foto!");
            return false;
        }else{
            
            let descricaoCelula = $("#iDescricaoNovaCelula").val();
            let dataCelula = $("#iDataNovaCelula").val();
            $("#pEnvioFoto").attr("aria-valuenow", "0");
            $("#pEnvioFoto").css("width", "0%");
            $("#dEnvioConcluido").hide();

            db.collection("cont_celulas").get("9GYvhjPyNi6h3m4YV0a1").then(async (data) => {

                let contCelulas = data.docs[0].data().cont_celulas;
                let contFotos = data.docs[0].data().cont_fotos;
                let fotos = $("#iFotosCelula")[0].files;
                $("#pEnvioFoto").attr("aria-valuemax", fotos.length);
                $("#divEnvioFotos").show();

                db.collection("celulas").add({
                    id: contCelulas,
                    descricao: descricaoCelula,
                    data_celula: dataCelula
                });

                for(var i=0; i<fotos.length; i++){
                    await uploadImagem(fotos[i], contFotos, contCelulas);
                    contFotos++;
                }

                db.collection("cont_celulas").doc("9GYvhjPyNi6h3m4YV0a1").update({cont_celulas: ++contCelulas});
                db.collection("cont_celulas").doc("9GYvhjPyNi6h3m4YV0a1").update({cont_fotos: contFotos});

                $("#iDescricaoNovaCelula").val("");
                $("#iDataNovaCelula").val("");
                $("#iFotosCelula").val("");
            });
        }

    });

    $("#bCancelarNovaCelula").click(() => {
        $("#iDescricaoNovaCelula").val("");
        $("#iDataNovaCelula").val("");
        $("#iFotosCelula").val("");
    });

    var inputUsuario = document.getElementById("iUsuario");
    var inputSenha = document.getElementById("iSenha");

    inputUsuario.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault(); //Cancela a ação default
            document.getElementById("bLogar").click();
        }
    });

    inputSenha.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault(); //Cancela a ação default
            document.getElementById("bLogar").click();
        } 
    });
});