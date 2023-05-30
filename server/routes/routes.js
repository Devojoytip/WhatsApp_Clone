import express from 'express';
import { addUser } from '../controllers/user_controller.js';

const route = express.Router();

route.post('/add', addUser);

export default route;