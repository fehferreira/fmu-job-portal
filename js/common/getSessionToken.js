export const getSessionToken = () => {
  const allCookies = document.cookie.split(';');
  const rawToken = allCookies.find((cookie) => cookie.includes('TOKEN_LOGIN'));
  if (!rawToken) return null;
  const tokenValues = rawToken.split('=');
  return JSON.parse(tokenValues[1]);
};

export const getTypeUser = () => {
  const token = getSessionToken();
  if (!token) return null;
  return token.client_type;
};

export const logOut = () => {
  document.cookie = 'TOKEN_LOGIN=; Max-Age=0; path=/; domain=' + location.host;
};
