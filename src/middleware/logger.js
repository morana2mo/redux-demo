const logger = ({getState,dispatch}) => next => action => {
	let type = action.type ;
	console.log(action.type+'----');
	console.group(type);
	console.log(action);
	console.info('dispatching', action);
    let result = next(action);
    console.log('next state', getState());
  	console.groupEnd(type);
  	return result;
};
export default logger;