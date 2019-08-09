import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index.js'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <Index></Index>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
