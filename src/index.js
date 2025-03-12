import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app wrapped with Provider to give access to Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
