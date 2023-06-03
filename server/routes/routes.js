import express from 'express';
import { addUser, getUsers } from '../controllers/user_controller.js';
import { getConversation, newConversation } from '../controllers/conversation_controller.js';
import { getMessage, newMessage } from '../controllers/message_controller.js';
import { uploadFile,getFile } from '../controllers/file_controller.js';
import storage from '../middlewares/upload.js';

const route = express.Router();

// User routes
route.post('/add', addUser);
route.get('/users', getUsers);

// Conversation routes
route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)

// Message routes
route.post('/message/add',newMessage)
route.get('/message/get/:id',getMessage)

// File upload routes
route.post('/file/upload', storage.single('file'), uploadFile);
route.get('/file/:filename', getFile);

export default route;