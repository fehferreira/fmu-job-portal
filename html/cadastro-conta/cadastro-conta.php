<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Cadastro de Usuário | Jobs4U</title>
  <link rel="stylesheet" type="text/css" href="../../css/reset.css" />
  <link rel="stylesheet" type="text/css" href="../../css/index.css" />
  <link rel="stylesheet" type="text/css" href="../../css/cadastro-conta/cadastro-conta.css" />
  <script src="../../utils/jquery.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js"></script>
</head>

<body>
  <div class="register--container">
    <div class="register--title">
      <h1>Cadastre sua conta agora!</h1>
      <h2>Começe hoje a correr atrás de uma nova vaga no mercado de trabalho</h2>
    </div>
    <form method="POST">
      <input type="email" id="campoEmail" placeholder="E-mail" />
      <input type="password" id="campoSenha" placeholder="Senha" />
      <input type="text" id="name" placeholder="Nome" />
      <input type="text" id="sername" placeholder="Sobrenome" />
      <input type="text" id="cpf" data-mask="999.999.999-99" placeholder="Documento" />
      <button class="button button--secondary register--button" id="btnCriarConta" type="submit">Cadastrar</button>
    </form>
  </div>
  <?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dadosFormulario = $_POST;
    $dadosJson = json_encode($dadosFormulario);
    $url = 'http://localhost:8000/';
    $opcoes = array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS => $dadosJson,
      CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($dadosJson)
      )
    );
    $curl = curl_init();
    curl_setopt_array($curl, $opcoes);
    $resposta = curl_exec($curl);
    if ($resposta === false) {
      die('Erro na requisição cURL: ' . curl_error($curl));
    }
    echo "<span>Formulário enviado com sucesso!</span>";
    exit;
  }
  ?>
</body>

</html>