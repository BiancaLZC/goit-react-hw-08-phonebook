import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/redux/Store';
import App from './components/App/App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const basename =
  process.env.NODE_ENV === 'production' ? '/goit-react-hw-08-phonebook' : '';
root.render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>
);