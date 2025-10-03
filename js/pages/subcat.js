import { DATA } from '../data.js';
import { listOrDetail } from './render-list-or-detail.js';

const PAGE = document.currentScript.dataset.page; // 'museos' | 'restaurantes' | 'sitios' | 'transporte'
listOrDetail({
  dataset: DATA.turismo[PAGE] || [],
  linkBase: `./${PAGE}.html`,
  notFound: 'Elemento no encontrado'
});
