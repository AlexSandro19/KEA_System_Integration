import WebSocket, { WebSocketServer } from 'ws';

const webSocketServer = new WebSocketServer({ port: 8080 });

const websocket = new WebSocket("ws://localhost:8080/")
webSocketServer.on('connection', function connection(ws) {
    websocket.on('message', function message(data) {
        console.log('received: %s', data);
    });

    websocket.send('Hello from the server');
});

