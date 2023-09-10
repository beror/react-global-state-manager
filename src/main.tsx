import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import {
  StateProvider as ContextBasedStateProvider
} from './stateManagers/contextBased/StateProvider.tsx';
import { initialState } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextBasedStateProvider initialState={initialState}>
      <App />
    </ContextBasedStateProvider>
  </React.StrictMode>,
);
