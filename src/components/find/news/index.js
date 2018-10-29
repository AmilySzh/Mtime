import React,{Component} from "react"
import {connect} from "react-redux"
class News extends Component{
	render(){
		return(<div>
				News
			</div>)
	}
}
export default connect()(News)