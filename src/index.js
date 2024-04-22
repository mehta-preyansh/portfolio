import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </HashRouter>
  </React.StrictMode>
);

