// let wsUri = "ws://echo.websocket.org";
let wsUri = "ws://localhost:3000";
// let securewsUri = "wss://echo.websocket.org";
let output;

function init() {
  output = document.getElementById('output');
  testWebSocket();
}

function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = onOpen;
  websocket.onclose = onClose;
  websocket.onmessage = onMessage;
  websocket.onerror = onError;
}

function onOpen(evt) {
  writeToScreen('CONNECTED');
  doSend('WebSocket rocks');
}

function onClose(evt) {
  writeToScreen('DISCONNECTED');
}

function onMessage(evt) {
  writeToScreen(`<span style="color: blue;">
    RESPONSE: ${evt.data}
  </span>`);
  websocket.close();
}

function onError(evt) {
  writeToScreen(`<span style="color:red">
    ERROR: ${evt.data}
  </span>`);
}
 
function doSend(message) {
  writeToScreen('SENT: ' + message);
  websocket.send(message);
}

function writeToScreen(message) {
  var pre = document.createElement('p');
  pre.style.wordWrap = 'break-word';
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener('load', init, false);
