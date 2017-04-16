import React, { Component } from 'react';
class List  extends Component{
    constructor(props){
        super(props);
    }
    upData(e){
        this.props.upData(this.props.index,e.target.value)
    }
    render(){
        return(
            <div>
                <input type="text" onBlur={(e)=>this.upData(e)} defaultValue={this.props.item?this.props.item:''} />
                <span onClick={this.props.delete} data-index={this.props.index}> X</span>
            </div>
        )
    }
}
export default List;