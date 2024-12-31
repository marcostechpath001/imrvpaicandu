<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mv1609rodrigues@gmail.com"; // Substitua pelo seu endereço de e-mail
    $subject = "Novo Pedido de Oração";
    $body = "Nome: $name\nE-mail: $email\n\nMensagem:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Pedido enviado com sucesso!');window.location.href='assista_online.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar o pedido. Tente novamente.');window.history.back();</script>";
    }
} else {
    echo "<script>alert('Acesso inválido!');window.history.back();</script>";
}
?>