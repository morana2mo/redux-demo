import React  from "react"
import  { render } from 'react-dom'
import { Provider } from "react-redux"
import { Router, hashHistory } from 'react-router';
import routes from "./src/routes"
import configureStore from "./src/store/configureStore"

const store = configureStore();


render(
  <Provider store={store}>
  	<Router history={hashHistory}>
  		{routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)