import { bindActionCreators } from "redux";
import { connect }from "react-redux";
import Counter from "../views/counter/index.jsx";
import  * as CounterActions from '../actions/counter';

//将state.counter绑定到props的counter
const mapstateToProps = state =>{
	return {
		counter :state.counter
	}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(CounterActions, dispatch)
}
//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapstateToProps,mapDispatchToProps)(Counter)