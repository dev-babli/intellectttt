import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoute from './main-component/router/index';
import reportWebVitals from './utils/reportWebVitals';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/fontawesome.css';
import './css/themify-icons.css';
import './css/animate.css';
import './css/cursor.css';
import './css/custom-font.css';
import './css/main.css';
import './css/minimal-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllRoute />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 