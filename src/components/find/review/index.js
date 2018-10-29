import React,{Component} from "react"
import {connect} from "react-redux"
class Review extends Component{
	render(){
		return(<div>
				Review
			</div>)
	}
}
export default connect()(Review)