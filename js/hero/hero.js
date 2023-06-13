const rootRef = `http://${window.location.hostname}`;

function redirectSearchPage() {
  const value = document.getElementById('search-field').value;
  window.location.href = `${rootRef}/html/pesquisa-vaga/pesquisa-vaga.html?search=${value}`;
}

const query = window.location.search.replace('?', '').split('=')[1];
const inputField = document.getElementById('search-field');
inputField.value = query || '';
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') redirectSearchPage();
});

const searchButton = document.getElementById('search-submit-button');
searchButton.addEventListener('click', redirectSearchPage);
