import { DATA } from '../data.js';
import { listOrDetail } from './render-list-or-detail.js';
listOrDetail({ dataset: DATA.hoteles, linkBase: 'hoteles.html', notFound: 'Hotel no encontrado' });
