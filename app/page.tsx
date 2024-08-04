'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import WebSocket from 'isomorphic-ws';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws');

    ws.onmessage = (event: WebSocket.MessageEvent) => {
      console.log(`Получено: ${event.data}`);
    };

    ws.onopen = () => {
      console.log('Соединение установлено.');
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleClick = () => {
    router.push('/another-page');
  };

  return (
    <div>
      <h1>My Next.js App</h1>
      <button onClick={handleClick}>Другая страница</button>
    </div>
  );
};

export default HomePage;