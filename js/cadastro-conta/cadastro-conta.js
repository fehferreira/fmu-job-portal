const rootDir = `http://${window.location.hostname}`;

function cadastrarPf() {
  var email = $('#campoEmailPF').val();
  var password = $('#campoSenhaPF').val();
  var name = $('#namePF').val();
  var surname = $('#surnamePF').val();
  var cpf = $('#cpfPF').val();
  var data = {
    email,
    password,
    name,
    surname,
    cpf,
  };
  $.ajax({
    url: 'cadastro-conta-pf.php',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (data) {
      try {
        JSON.parse(data);
        alert('Cadastro realizado com sucesso!');
        window.location.href = `${rootDir}/html/login/login.html`;
      } catch (error) {
        alert('Erro no registro de pessoa física!');
      }
    },
  });
}

function cadastrarPj() {
  var email = $('#campoEmailPJ').val();
  var password = $('#campoSenhaPJ').val();
  var bussinessName = $('#bussinessNamePJ').val();
  var fantasyName = $('#fantasyNamePJ').val();
  var name = $('#fantasyNamePJ').val();
  var cnpj = $('#cnpjPJ').val();
  var data = {
    email,
    password,
    bussinessName,
    fantasyName,
    name,
    cnpj,
  };
  $.ajax({
    url: 'cadastro-conta-pj.php',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      try {
        JSON.parse(data);
        alert('Cadastro realizado com sucesso!');
        window.location.href = `${rootDir}/html/login/login.html`;
      } catch (error) {
        alert('Erro no registro de pessoa jurídica!');
      }
    },
  });
}

function buttonSelectForm(event) {
  if (event.target.id === 'btnUserPF') {
    const pfButton = document.getElementById('register-form-pf');
    pfButton.classList.add('show-form');
    const pjButton = document.getElementById('register-form-pj');
    pjButton.classList.remove('show-form');
    return;
  }
  const pfButton = document.getElementById('register-form-pf');
  pfButton.classList.remove('show-form');
  const pjButton = document.getElementById('register-form-pj');
  pjButton.classList.add('show-form');
}

$(document).ready(function () {
  // Evento do botao de 'enviar criar conta'
  $('#btnCriarContaPF').click(cadastrarPf);
  // Evento do botao de 'enviar criar conta'
  $('#btnCriarContaPJ').click(cadastrarPj);
  // Evento de botão de exibir form de pf
  $('#btnUserPF').click(buttonSelectForm);
  // Evento de botão de exibit form de pj
  $('#btnUserPJ').click(buttonSelectForm);
});
