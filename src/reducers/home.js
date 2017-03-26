import { HOME_TAB } from '../constants/home';

const home = (state = 0,action) =>{
	switch(action.type){
		case HOME_TAB:
			return state+1
		default:
			return state
	}
}
export default home