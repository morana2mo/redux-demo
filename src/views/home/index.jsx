import React, { Component } from 'react';
import { connect } from "react-redux";
import  { showCategory }  from '../../actions/home';
import PropTypes from 'prop-types';
import List from './list.jsx';
import '../../assets/less/index.less';
//将state.counter绑定到props的counter
const mapStateToProps = state => { 
	return {
	  categories: state.home.category || []
	}
}


class Home extends Component{
	constructor(props){
		super();
		this.add=this.add.bind(this);
        this.delete=this.delete.bind(this);
        this.upData=this.upData.bind(this);
		this.state={
			lists:[]
		}
	}
	add(){
		let lists = this.state.lists;
		lists.push('');
		this.setState({lists:lists})
	}
	delete(e){
		let index = e.target.getAttribute('data-index'),
			lists=this.state.lists;
			lists.splice(index,1);
			this.setState({lists:lists});
	}
	upData(i,x){
		var lists = this.state.lists;
		lists[i]=x;
		this.setState({lists:lists})
	}
	componentDidMount() {
	    const { showCategory } = this.props;
	    showCategory();
	  }
	
	render(){
		//从组件的props属性中导入四个方法和一个变量
		const { categories } = this.props;
		//渲染组件，包括一个数字，四个按钮
		return(
			<div>
				<span onClick={this.add}>添加</span>
				{
					this.state.lists.map((item,index)=>{
						return(
							 <List key={item?item:index} index={index} delete={this.delete} upData={this.upData}  item={item}/>
						)	
					})
				}
			</div>
		)
	}
}
//限制组件的props安全
Home.proptypes ={
	//counter必须为数字，且必须存在
	categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps,{ showCategory })(Home);