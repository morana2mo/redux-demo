import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from "../routes";
import DevTools from './dev-tools.jsx';

const RootProd = props => {
  const { history, store } = props;
  const showDevTools = () => (!window.devToolsExtension) ? (<DevTools />) : false;

  return (
    <Provider store={ store }>
      <div className="app-container">
        <Router history={ history }>
          { routes }
        </Router>
         { showDevTools() }
      </div>
    </Provider>
  );
}

RootProd.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

export default RootProd;
