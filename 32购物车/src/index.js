import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Router from './router/Router.js'
import { ConfigProvider } from 'antd'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Router></Router>
    </ConfigProvider>
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
