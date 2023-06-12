<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="../../css/criarConta/criarConta.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/logo 1.svg" />
    <title>Cadastro de Usuário | Jobs4U</title>
  </head>
  <body class="background">
    <div class="bg_input"></div>

    <div class="createAccount">
      <h1>Cadastro</h1>
    </div>
    <div class="backgroundInput"></div>
    <div>
      <form method="POST">
        <input class="inputEmail" type="email" id="campoEmail" placeholder="Digite seu e-mail" />
        <br />
        <br />
        <input class="inputSenha" type="password" id="campoSenha" placeholder="Senha" />
        <br />
        <br />
        <input class="inputUsuario" type="text" id="name" placeholder="Digite seu e-mail" />
        <br />
        <br />
        <input class="inputUsuario" type="text" id="sername" placeholder="Digite seu e-mail" />
        <br />
        <br />
        <input class="inputUsuario" type="text" id="cpf" placeholder="Digite seu e-mail" />
        <br />
        <br />
        <button id="btnCriarConta" type="submit" class="botaoCriarConta">Cadastrar</button>
      </form>
    </div>
    <?php
      if ($_SERVER['REQUEST_METHOD'] === 'POST') {
          // Verifica se o formulário foi enviado

          // Obtém os dados do formulário
          $dadosFormulario = $_POST;

          // Converte os dados do formulário em JSON
          $dadosJson = json_encode($dadosFormulario);

          // Configura as opções da requisição cURL
          $url = 'http://localhost:8000/'; // Substitua pelo destino desejado para enviar o JSON
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

          // Inicia a requisição cURL
          $curl = curl_init();
          curl_setopt_array($curl, $opcoes);

          // Executa a requisição e obtém a resposta
          $resposta = curl_exec($curl);

          // Verifica se a requisição foi bem-sucedida
          if ($resposta === false) {
              // Lidere com qualquer erro de requisição
              die('Erro na requisição cURL: ' . curl_error($curl));
          }

          // Exibe a resposta da requisição
          echo "<span>Formulário enviado com sucesso!</span>";
          exit; // Encerra o script após o envio do formulário
      }
    ?>
  </body>
</html>
