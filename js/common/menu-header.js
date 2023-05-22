function handleMenu() {
  const menu = document.getElementById('header-menu');
  if (menu.style.visibility === 'hidden') menu.style.visibility = 'visible';
  else menu.style.visibility = 'hidden';
}

const btnAvatarIcon = document.getElementById('btnAvatarIcon');

btnAvatarIcon.addEventListener('click', handleMenu);
