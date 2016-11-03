import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Router from "react-router/BrowserRouter";
import { Provider } from "react-redux";
import { TrippleR } from "trippler";

import store from "./redux/store";

ReactDOM.render(<Router>
  <Provider store={store}>
    <div>
    <TrippleR />    
      <App />
    </div>
  </Provider></Router>,
  document.getElementById('root')
);
