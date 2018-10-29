import React,{Component} from "react"
import {connect} from "react-redux"
class List extends Component{
	render(){
		return(<div>
				List
			</div>)
	}
}
export default connect()(List)