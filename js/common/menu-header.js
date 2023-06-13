import { getSessionToken, logOut, getTypeUser } from './getSessionToken.js';

const rootDir = `http://${window.location.hostname}`;

function renderUnloggedHeader() {
  const signInButton = document.createElement('button');
  signInButton.classList.add('button');
  signInButton.classList.add('button--primary');
  signInButton.appendChild(document.createTextNode('Entre'));
  signInButton.addEventListener(
    'click',
    () => (window.location.href = `${rootDir}/html/login/login.html`)
  );

  const signUpButton = document.createElement('button');
  signUpButton.classList.add('button');
  signUpButton.classList.add('button--secondary');
  signUpButton.appendChild(document.createTextNode('Cadastre-se'));
  signUpButton.addEventListener(
    'click',
    () => (window.location.href = `${rootDir}/html/cadastro-conta/cadastro-conta.html`)
  );

  // Include in container
  const utils = document.getElementById('header-options');
  utils.append(signInButton, signUpButton);
}

function renderLoggedHeader() {
  // Img avatar
  const btnAvatarIcon = document.createElement('img');
  btnAvatarIcon.setAttribute('id', 'btnAvatarIcon');
  btnAvatarIcon.setAttribute('src', `${rootDir}/img/avatar-icon.jpeg`);
  btnAvatarIcon.classList.add('header--utils--avatar-icon');
  btnAvatarIcon.addEventListener('click', handleMenu);

  // Header menu
  const firstOption = document.createElement('a');
  const sulfix = getTypeUser() === 'employer' ? '-pj' : '';
  firstOption.setAttribute(
    'href',
    `${rootDir}/html/home-logada${sulfix}/home-logada${sulfix}.html`
  );
  firstOption.appendChild(document.createTextNode('Minhas vagas'));

  const secondOption = document.createElement('a');
  secondOption.setAttribute('href', `${rootDir}/html/edicao-usuario/edicao-usuario.html`);
  secondOption.appendChild(document.createTextNode('Editar informações'));

  const thirdOption = document.createElement('a');
  thirdOption.setAttribute('href', '#');
  thirdOption.appendChild(document.createTextNode('Configurações'));

  const menu = document.createElement('div');
  menu.setAttribute('id', 'header-menu');
  menu.classList.add('header--menu');
  menu.append(firstOption, secondOption, thirdOption);

  // Exit button
  const exitButton = document.createElement('button');
  exitButton.classList.add('button');
  exitButton.classList.add('button--secondary');
  exitButton.appendChild(document.createTextNode('Sair'));
  exitButton.addEventListener('click', () => {
    logOut();
    window.location.href = `${rootDir}/html/index.php`;
  });

  // Include in container
  const utils = document.getElementById('header-options');
  utils.append(btnAvatarIcon, menu, exitButton);
}

function renderMenuOptions() {
  const tokenValue = getSessionToken();
  if (!tokenValue) {
    renderUnloggedHeader();
    return;
  }
  renderLoggedHeader();
}

function handleMenu() {
  const menu = document.getElementById('header-menu');
  if (menu.style.visibility === 'hidden') menu.style.visibility = 'visible';
  else menu.style.visibility = 'hidden';
}

const logo = document.getElementById('logo-header');
logo.setAttribute('href', `${rootDir}/html/index.php`);

renderMenuOptions();
