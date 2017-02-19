import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import invariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import * as actionCreators from '../actions/counter';

//applyMiddleware来自redux可以包装store的dispatch

//thunk作用是使action创建函数可以返回一个function代替一个action对象

const configureStore = (preloadedState) =>{
	let composeEnhancers = composeWithDevTools({ actionCreators });
	let store = createStore(reducer,preloadedState,composeEnhancers(
		applyMiddleware(invariant(), thunk)
	));
	//热替换选项
	if(module.hot){
		module.hot.accept('../reducers',()=>{
			let nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}
	return store
}
export default configureStore