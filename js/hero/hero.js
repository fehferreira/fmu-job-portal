const rootRef = `http://${window.location.hostname}`;

function redirectSearchPage() {
  const value = document.getElementById('search-field').value;
  window.location.href = `${rootRef}/html/pesquisa-vaga/pesquisa-vaga.html?search=${value}`;
}

const inputField = document.getElementById('search-field');
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') redirectSearchPage();
});

const searchButton = document.getElementById('search-submit-button');
searchButton.addEventListener('click', redirectSearchPage);
