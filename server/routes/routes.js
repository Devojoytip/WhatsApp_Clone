import express from 'express';
import { addUser, getUsers } from '../controllers/user_controller.js';
import { newConversation } from '../controllers/conversation_controller.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversation/add',newConversation)

export default route;