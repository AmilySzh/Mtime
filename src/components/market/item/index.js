import React,{Component} from "react"
import {connect} from "react-redux"
class Item extends Component{
	render(){
		return(<div>
				Item
			</div>)
	}
}
export default connect()(Item)