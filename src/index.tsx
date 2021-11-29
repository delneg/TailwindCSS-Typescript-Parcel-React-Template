import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {store} from './store';


render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
