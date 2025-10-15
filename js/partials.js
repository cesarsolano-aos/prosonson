import { mountPartials } from './common.js';
await mountPartials();

import { DATA } from './data.js';
import { renderCards } from './common.js';
const destacados = [
	...DATA.turismo.museos.slice(0,1),
	...DATA.hoteles.slice(0,1),
	...DATA.emprendimientos.slice(0,1),
];
renderCards(document.getElementById('app'), destacados, 'turismo.html');