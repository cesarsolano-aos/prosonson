import { DATA } from '../data.js';
import { listOrDetail } from './render-list-or-detail.js';
listOrDetail({ dataset: DATA.emprendimientos, linkBase: 'emprendimientos.html', notFound: 'Emprendimiento no encontrado' });
