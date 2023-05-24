import { listJob } from '../../mock/vagas-mock.js';
import { iconImg } from '../../mock/icon-job-base64.js';

function getTitleList() {
  return listJob.length > 0
    ? `${listJob.length} emprego${listJob.length > 1 && 's'}`
    : 'Nenhum emprego encontrado';
}

function renderTitleList() {
  const headerList = document.getElementById('list-header');
  const titleElement = document.createElement('h2');
  const title = document.createTextNode(getTitleList());

  titleElement.appendChild(title);
  headerList.insertBefore(titleElement, headerList.firstChild);
}

function createDetailElement(iconRef, labelText) {
  const detailElement = document.createElement('div');
  detailElement.classList.add('list--content--details--info');
  const iconElement = document.createElement('span');
  iconElement.classList.add('material-symbols-outlined');
  iconElement.appendChild(document.createTextNode(iconRef));
  const label = document.createElement('label');
  label.appendChild(document.createTextNode(labelText));
  detailElement.append(iconElement, label);
  return detailElement;
}

function renderJobCard() {
  // create img
  const imgDivElement = document.createElement('div');
  imgDivElement.classList.add('list--content--icon');
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', iconImg);
  imgDivElement.appendChild(imgElement);

  // enterprise name
  const enterpriseElement = document.createElement('label');
  enterpriseElement.appendChild(document.createTextNode('Notion'));

  // office name
  const officeElement = document.createElement('h3');
  officeElement.appendChild(document.createTextNode('Junior UI Designer'));

  // details list
  const detailElement = document.createElement('div');
  detailElement.classList.add('list--content--details');

  const location = createDetailElement('pin_drop', 'Madrid');
  const periode = createDetailElement('schedule', 'Tempo integral');
  const amount = createDetailElement('attach_money', '30-32k');
  const postDate = createDetailElement('calendar_today', '1 dia atrás');

  detailElement.append(location, '•', periode, '•', amount, '•', postDate);

  // description
  const textNode =
    'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.';
  const descriptionElement = document.createElement('p');
  descriptionElement.appendChild(document.createTextNode(textNode));

  // create content
  const contentElement = document.createElement('div');
  contentElement.classList.add('list--content--info');
  contentElement.append(enterpriseElement, officeElement, detailElement, descriptionElement);

  // create JobCard
  const jobCardElement = document.createElement('div');
  jobCardElement.classList.add('list--content--job');
  jobCardElement.append(imgDivElement, contentElement);

  const listContainerElement = document.getElementById('list-content');
  listContainerElement.appendChild(jobCardElement);
}

renderTitleList();
renderJobCard();
