import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from "./Components/Data";
import {state} from "./Components/State";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} data={data} />
  </React.StrictMode>
);

