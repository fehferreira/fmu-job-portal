<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $body = file_get_contents('php://input');
  $data = json_decode($body);
  if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Erro ao decodificar o corpo da requisição.']);
    exit;
  }
  $url = 'http://localhost:8000/api/auth/register';
  $curl = curl_init($url);
  curl_setopt($curl, CURLOPT_POST, 1);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_POSTFIELDS, [
    'email' => $data->email,
    'password' => $data->password,
    'name' => $data->name,
    'surname' => $data->surname,
    'cpf' => $data->cpf,
  ]);
  $resposta = curl_exec($curl);
  if ($resposta === false) {
    die('Erro na requisição cURL: ' . curl_error($curl));
  }
  curl_close($curl);
  echo $resposta;
}
?>