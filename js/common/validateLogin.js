import { getSessionToken } from './getSessionToken.js';

const rootDir = `http://${window.location.hostname}`;

function validateLogin() {
  const token = getSessionToken();
  if (!token) window.location.href = `${rootDir}/html/login/login.html`;
}

validateLogin();
