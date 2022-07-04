<?php
    $dsn = "mysql:dbname=ib_campos_brancos;host=localhost";
    $dbuser = "root";
    $dbpass = "";

    try{
        $pdo = new PDO($dsn, $dbuser, $dbpass);

        $nome = utf8_decode("Lucas Martins Romão");
        $whatsapp = "(34) 99835-1457";
        $descricao = utf8_decode("Pedido Teste");

        $sql = "INSERT INTO pedidos_oracao(nome_pessoa, whatsapp, descricao_pedido) VALUES (:nome, :whatsapp, :descricao)";
        $sql = $pdo->prepare($sql);
        $sql->bindValue(':nome', $nome);
        $sql->bindValue(':whatsapp', $whatsapp);
        $sql->bindValue(':descricao', $descricao);
        $sql->execute();
        echo "Inserido com sucesso";
    }catch(PDOException $e){
        echo "Erro: " . $e->getMessage();
    }
?>