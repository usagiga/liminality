import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './views/Top';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to route multiple pages,
// use React Router.
// https://create-react-app.dev/docs/adding-a-router/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
