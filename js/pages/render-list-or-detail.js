import { getParam, renderCards, renderDetail } from '../common.js';

export function listOrDetail({ dataset, linkBase, notFound='No encontrado' }) {
  const app = document.getElementById('app');
  const id = getParam('id');

  if (!id) {
    renderCards(app, dataset, linkBase);
    return;
  }
  const item = dataset.find(x => String(x.id) == String(id));
  if (!item) {
    app.innerHTML = `<h2>${notFound}</h2>`;
    return;
  }
  renderDetail(app, item);
}
