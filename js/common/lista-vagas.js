import { listJob } from '../../mock/vagas-mock.js';

function getTitleList() {
  return listJob.length > 0
    ? `${listJob.length} vaga${listJob.length > 1 && 's'}`
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

function renderJobCard(job) {
  const { id, imgSrc, enterprise, office, details, description } = job;

  // create img
  const imgDivElement = document.createElement('div');
  imgDivElement.classList.add('list--content--icon');
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', imgSrc);
  imgDivElement.appendChild(imgElement);

  // enterprise name
  const enterpriseElement = document.createElement('label');
  enterpriseElement.appendChild(document.createTextNode(enterprise));

  // office name
  const officeElement = document.createElement('h3');
  officeElement.appendChild(document.createTextNode(office));

  // details list
  const detailElement = document.createElement('div');
  detailElement.classList.add('list--content--details');
  const nodeList = [];
  if (details) {
    details.forEach((element, index) => {
      const createdElement = createDetailElement(element.icon, element.value);
      nodeList.push(createdElement);
      if (index + 1 !== details.length) nodeList.push('•');
    });
    detailElement.append(...nodeList);
  }

  // description
  const descriptionElement = document.createElement('p');
  descriptionElement.appendChild(document.createTextNode(description));

  // create content
  const contentElement = document.createElement('div');
  contentElement.classList.add('list--content--info');
  contentElement.append(enterpriseElement, officeElement, detailElement, descriptionElement);

  // create JobCard
  const jobCardElement = document.createElement('div');
  jobCardElement.classList.add('list--content--job');
  jobCardElement.append(imgDivElement, contentElement);
  jobCardElement.setAttribute('id', `${id}-${enterprise}-${office}`);

  const listContainerElement = document.getElementById('list-content');
  listContainerElement.appendChild(jobCardElement);
}

function renderJobList() {
  listJob.forEach((job) => renderJobCard(job));
}

renderTitleList();
renderJobList();
