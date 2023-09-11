import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { StateProvider as ContextBasedGlobalStateProvider } from './stores/contextBased/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextBasedGlobalStateProvider>
      <App />
    </ContextBasedGlobalStateProvider>
  </React.StrictMode>,
);
