import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import Router from './router/Router'
import routers from './router/routers'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    {renderRoutes(routers)}
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
