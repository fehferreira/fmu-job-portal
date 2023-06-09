<?php

function postLogin($dados)
{

    $url = 'http://localhost:8000/api/auth/login';
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $dados);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $resp = curl_exec($curl);
    curl_close($curl);
    return $resp;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $body = file_get_contents('php://input');
    $data = json_decode($body);
    if ($data === null) {
        http_response_code(400);
        echo json_encode(['error' => 'Erro ao decodificar o corpo da requisição.']);
        exit;
    }
    $email = $data->email;
    $password = $data->password;
    $dados = [
        'email' => $email,
        'password' => $password
    ];
    echo postLogin($dados);
}
?>