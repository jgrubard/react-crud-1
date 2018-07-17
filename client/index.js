import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'

import App from './components/App'

const root = document.getElementById('root');
const app = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

render(app, root);