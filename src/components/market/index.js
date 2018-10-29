import React,{Component} from "react"
import {connect} from "react-redux"
class Market extends Component{
	render(){
		return(<div>
				Market
				{this.props.children}
			</div>)
	}
}
export default connect()(Market)