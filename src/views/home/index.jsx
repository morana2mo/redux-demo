import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import  { showCategory }  from '../../actions/home';

import '../../assets/less/index.less';
//将state.counter绑定到props的counter
const mapStateToProps = state => { 
	return {
	  categories: state.home.category || []
	}
}


class Home extends Component{

	componentDidMount() {
	    const { showCategory } = this.props;
	    showCategory();
	  }

	render(){
		//从组件的props属性中导入四个方法和一个变量
		const { categories } = this.props;
		//渲染组件，包括一个数字，四个按钮
		return(
			<ul>
			{	categories.map(item =>{
					return (
						 <li className='clearfix'  key={item.id}>
                <span className='pull-left'>{item.courseNum || 0} 课</span>
                <span className='pull-right'>{item.studentNum || 0 } 人</span>
            </li>
					)
				})}
			</ul>
		)
	}
}
//限制组件的props安全
Home.proptypes ={
	//counter必须为数字，且必须存在
	categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps,{ showCategory })(Home);