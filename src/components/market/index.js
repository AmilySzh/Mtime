import React,{Component} from "react"
import {connect} from "react-redux"
import './index.scss'

class Market extends Component{
	constructor(){
		super()
		this.state = {
			
		}
	}

	render(){
		return(
			<div>
				{this.props.children}
			</div>
			)
	}

	
}
export default connect()(Market)