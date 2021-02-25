import { Router } from 'express';
const routes = Router();

import StudentController from './controllers/StudentController';

// Rota students
routes.post('/students', StudentController.createStudent);
routes.get('/students', StudentController.index);

export default routes;