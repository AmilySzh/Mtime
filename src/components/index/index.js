import React,{Component} from "react"
import {connect} from "react-redux"
class Index extends Component{
	render(){
		return(<div>
				Index
			</div>)
	}
}
export default connect()(Index)