import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import store from './store/configureStore'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.css';
// import "antd/lib/select/style/index.css";
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={'/samjhana/inventory/'}>
        {/* ReportEntry/linkname */}
        <App />
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
