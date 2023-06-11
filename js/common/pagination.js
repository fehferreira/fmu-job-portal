class Pagination {
  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.lastPage;
    this.totalItems;
    this.updateUI;
  }

  firstPage() {
    if (this.currentPage === 1) return;
    this.currentPage = 1;
    this.updateUI();
  }

  nextPage() {
    if (this.currentPage < this.lastPage) {
      this.currentPage++;
      this.updateUI();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateUI();
    }
  }

  goToLastPage() {
    if (this.currentPage === this.lastPage) return;
    this.currentPage = this.lastPage;
    this.updateUI();
  }

  initialize(elementId, lastPage, updateUI) {
    this.lastPage = lastPage;
    this.totalItems = Math.ceil(this.itemsPerPage * lastPage);
    this.updateUI = updateUI;

    // Adicionar evento de clique para ir para a próxima página
    const nextButton = document.getElementById(`${elementId}-next`);
    nextButton.addEventListener('click', () => this.nextPage());

    // Adicionar evento de clique para ir para a página anterior
    const previousButton = document.getElementById(`${elementId}-previous`);
    previousButton.addEventListener('click', () => this.previousPage());

    // Adicionar evento de clique para ir para a primeira página
    const firstPageButton = document.getElementById(`${elementId}-first-page`);
    firstPageButton.addEventListener('click', () => this.firstPage());

    // Adicionar evento de clique para ir para a última página
    const lastPageButton = document.getElementById(`${elementId}-last-page`);
    lastPageButton.addEventListener('click', () => this.goToLastPage());
  }
}

export default new Pagination();
