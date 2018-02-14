const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 3000});

wss.on('connection', (ws) => {
  
  ws.send('Connected');

  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(message);
  });

});

// log message
console.log('websocket Server');
