import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

//导出加一的方法
export const increment = () =>{
	return {
		type : INCREMENT_COUNTER 
	}
}

//导出减一的方法
export const decrement = () =>{
	return {
		type: DECREMENT_COUNTER
	}
}

//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，
//dispatch用与执行action的方法，getState返回state
export const incrementIfOdd = () =>{
	return (dispatch,getState) =>{
		const { counter } = getState()

		//偶数就返回
		if(counter % 2 === 0){
			return
		}
		//没有返回就执行加一
		dispatch(increment())
	}
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export  const incrementAsync = (delay = 1000) =>{
	return dispatch =>{
		setTimeout(()=>{
			dispatch(increment())
		},delay)
	}
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export