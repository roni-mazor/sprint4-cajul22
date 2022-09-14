import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './root-cmp';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
