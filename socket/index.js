import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    },
})

let users = [];

const addUser = (userData, socketId) => {
    // if the user is not already in the users array then add the user
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    console.log('users',users)
    return users.find(user => user.sub === userId);
}

io.on('connection', (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users); // send all (online) users to the frontend
    })

    //send message
    socket.on('sendMessage', (data) => {
        console.log('data',data)
        console.log('data.receiverId',data.receiverId)
        const user = getUser(data.receiverId); // to get socketId of the user we want to send message to
        console.log('socket user',user)
        console.log('socketId',user.socketId)
        io.to(user.socketId).emit('getMessage', data) // send message to the user we want to send message to
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})