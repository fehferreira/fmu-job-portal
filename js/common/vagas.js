function getTitleList(listJob) {
  return listJob.length > 0
    ? `${listJob.length} vaga${listJob.length > 1 && 's'}`
    : 'Nenhum emprego encontrado';
}

function renderTitleList(data) {
  const headerList = document.getElementById('list-header');
  const titleElement = document.createElement('h2');
  const title = document.createTextNode(getTitleList(data));

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

function renderJobList(list) {
  list.forEach((job) => renderJobCard(job));

  // Hiden loading state
  var loadingList = document.getElementById('loading-content');
  loadingList.remove();

  // Show rendered list
  var list = document.getElementById('list-content');
  list.style.display = 'flex';
}

function renderJobCardSkeleton() {
  // create img
  const imgDivElement = document.createElement('div');
  imgDivElement.classList.add('list--content--icon');
  const imgElement = document.createElement('div');
  imgElement.style.width = '72px';
  imgElement.style.heigth = '72px';
  imgDivElement.classList.add('skeleton');
  imgDivElement.appendChild(imgElement);

  // enterprise name
  const enterpriseElement = document.createElement('label');
  enterpriseElement.style.width = '150px';
  enterpriseElement.style.height = '18px';
  enterpriseElement.classList.add('skeleton');

  // office name
  const officeElement = document.createElement('h3');
  officeElement.style.width = '200px';
  officeElement.style.height = '24px';
  officeElement.classList.add('skeleton');

  // details list
  const detailElement = document.createElement('div');
  detailElement.classList.add('list--content--details');
  const nodeList = [];
  const iconDefaultRef = ['pin_drop','schedule','attach_money','calendar_today'];
  
  const renderDetailSkeleton = (arrRef, index) => {
    const detailElement = document.createElement('div');
    detailElement.classList.add('list--content--details--info');
    const iconElement = document.createElement('span');
    iconElement.classList.add('material-symbols-outlined');
    iconElement.appendChild(document.createTextNode(arrRef[index]));
    const label = document.createElement('div');
    label.style.width = '75px';
    label.style.height = '16px';
    label.classList.add('skeleton');
    detailElement.append(iconElement, label);
    return detailElement;
  }
  
  for(var cont = 0; cont < 4; cont = cont+1) {
    const createdElement = renderDetailSkeleton(iconDefaultRef, cont);
    nodeList.push(createdElement);
    if (cont < 3) nodeList.push('•');
  };
  detailElement.append(...nodeList);

  // description
  const descriptionElement = document.createElement('p');
  descriptionElement.style.width = '100%';
  descriptionElement.style.height = '32px';
  descriptionElement.classList.add('skeleton');

  // create content
  const contentElement = document.createElement('div');
  contentElement.classList.add('list--content--info');
  contentElement.append(enterpriseElement, officeElement, detailElement, descriptionElement);

  // create JobCard
  const jobCardElement = document.createElement('div');
  jobCardElement.classList.add('list--content--job');
  jobCardElement.append(imgDivElement, contentElement);

  return jobCardElement;
}

function renderLoadingStateList() {
  // List skeleton cards
  const listSkeleton = document.createElement('article');
  listSkeleton.setAttribute('id', 'loading-content');
  listSkeleton.classList.add('list--content');
  listSkeleton.append(renderJobCardSkeleton());
  listSkeleton.append(renderJobCardSkeleton());
  listSkeleton.append(renderJobCardSkeleton());

  // remove article of list
  var list = document.getElementById('list-content');
  list.before(listSkeleton);
  list.style.display = 'none';
}

function getListJob() {
  renderLoadingStateList();
  fetch('http://localhost:3001/api/employments')
    .then((response) => response.json())
    .then((data) => {
      renderTitleList(data);
      renderJobList(data);
    })
    .catch(() => console.error('error listagem'));
}

getListJob();
