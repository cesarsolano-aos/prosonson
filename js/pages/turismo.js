import { DATA } from '../data.js';
import { listOrDetail } from './render-list-or-detail.js';

const all = [
  ...DATA.turismo.museos,
  ...DATA.turismo.restaurantes,
  ...DATA.turismo.sitios,
  ...DATA.turismo.transporte,
];

listOrDetail({ dataset: all, linkBase: 'turismo.html', notFound: 'Destino no encontrado' });
