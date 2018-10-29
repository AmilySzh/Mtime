import React,{Component} from "react"
import {connect} from "react-redux"
class Find extends Component{
	render(){
		return(<div>
				Find
				{this.props.children}
			</div>)
	}
}
export default connect()(Find)