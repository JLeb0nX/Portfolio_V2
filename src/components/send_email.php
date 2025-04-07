<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    $to = 'johan.lebon@rt-iut.re';
    $subject = 'Nouveau message de contact';
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Email envoyé avec succès !']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Erreur lors de l\'envoi de l\'email.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Méthode de requête non valide.']);
}
?>