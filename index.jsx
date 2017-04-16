import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from "./src/store"
import RootProd from './src/containers/root.jsx';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

ReactDom.render(
  <RootProd history={ history } store={store} />, 
  document.getElementById('root')
)