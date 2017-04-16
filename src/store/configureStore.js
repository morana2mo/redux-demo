import { createStore, applyMiddleware ,compose } from 'redux';

import DevTools from '../containers/dev-tools.jsx';

import logger from '../middleware/logger';
import api from '../middleware/api';
import rootReducer from '../reducers';


let finalCreateStore;
const configureStoreDev = (initialState = {}) =>{
	
	finalCreateStore = compose(
      applyMiddleware(logger, api),
	  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    )(createStore);
	
	const store = finalCreateStore(rootReducer, initialState);

	//热替换选项
	if(module.hot){
		module.hot.accept('../reducers',()=>{
			let nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}
	return store
}

export default configureStoreDev;