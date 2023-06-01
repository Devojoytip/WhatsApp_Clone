import express from 'express';
import { addUser, getUsers } from '../controllers/user_controller.js';
import { getConversation, newConversation } from '../controllers/conversation_controller.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)

export default route;