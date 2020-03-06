import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import EditApp from './reducers';
import App from './App';

const store = createStore(EditApp);
render(
  <Provider store={store}>
	<BrowserRouter>
    <App />
	</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);