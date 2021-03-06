import { combineReducers } from "redux";
import counter from "./counter";
import home from "./home";


//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
	counter,
	home
})

export default rootReducer