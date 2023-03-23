import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Memo from './Memo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Memo/>
  </React.StrictMode>
);


