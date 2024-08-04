import { WebSocketServer } from 'ws';
import { parse } from 'cookie';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws, req) => {
  const cookies = parse(req.headers.cookie || '');
  const key = cookies.key;

  if (!key) {
    ws.close();
    return;
  }

  const sendKey = () => {
    if (ws.readyState === ws.OPEN) {
      ws.send(key);
    }
  };

  sendKey();
  const interval = setInterval(sendKey, 5000);

  ws.on('close', () => {
    clearInterval(interval);
  });
});

console.log('WebSocket server running on ws://localhost:3001');