import { getListJob } from '../common/vagas.js';

const query = window.location.search.replace('?', '').split('=')[1];
getListJob(query, 'api/employments/');
