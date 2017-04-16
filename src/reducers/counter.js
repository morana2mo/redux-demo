import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

const defaultState = 0;
const counter = (state = defaultState,action) =>{
	switch(action.type){
		case INCREMENT_COUNTER:
			return state+1
		case DECREMENT_COUNTER:
			return state-1
		default:
			return state
	}
}
export default counter