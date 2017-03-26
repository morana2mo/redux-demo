import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from "redux";
import { connect }from "react-redux";
import  * as CounterActions from '../../actions/counter';
import '../../assets/less/index.less';
//将state.counter绑定到props的counter
const mapstateToProps = state =>{
	return {
		counter :state.counter
	}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(CounterActions, dispatch)
}

class Counter extends Component{
	render(){
		//从组件的props属性中导入四个方法和一个变量
		const {increment,incrementIfOdd,incrementAsync,decrement,counter} = this.props;
		//渲染组件，包括一个数字，四个按钮
		return(
			<p>
				Cliked:{counter}times
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
				<button onClick={incrementIfOdd}>Increment if odd</button>
				<button onClick={()=>incrementAsync()}>Increment async</button>
			</p>
		)
	}
}
//限制组件的props安全
Counter.proptypes ={
	//increment必须为function，且必须存在
	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync:PropTypes.func.isRequired,
	decrement:PropTypes.func.isRequired,
	//counter必须为数字，且必须存在
	counter:PropTypes.number.isRequired
}

export default connect(mapstateToProps,mapDispatchToProps)(Counter)