const pushService = require('../services/push.service');

// EVENTS LIST:
// REPORT MUKI
const SOCKET_CONNECT = 'socket-connect';


const PUSH_NOTIFICATION = 'push-notification';


var connectedSockets = [];

module.exports = (io) => {

    io.on('connection', socket => {
        socket.on(SOCKET_CONNECT, userId => {
            socket.userId = userId;
            // see if already exists:
            connectedSockets.push(socket);
            console.log('Connected user:', userId, 'in socket:', socket.userId);
        })
    

        socket.on('disconnect', () => {
            console.log('Disconnected socket user', socket.userId);
            const socketIdx = connectedSockets.findIndex(inSocket => inSocket.id === socket.id);
            if (socketIdx !== -1) connectedSockets.splice(socketIdx, 1);
        })


        // Todo: Notifications
    

        // PUSH NOTIFICATIONS:
        socket.on(PUSH_NOTIFICATION, async ({userId, notification}) => {
            pushService.send(userId, notification);
        })
    });
}