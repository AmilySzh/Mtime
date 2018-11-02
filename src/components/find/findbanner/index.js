import React,{Component} from "react"
import {connect} from "react-redux"
import "./index.scss"
class Findbanner extends Component{
	render(){
		return(<div id="findbanner">
			{this.props.GetRecommend?<div>
				{this.props.GetRecommend.imageUrl?<img src={this.props.GetRecommend.imageUrl} alt=""/>:
				<video src={this.props.GetRecommend.hightUrl} ></video>}
				<span>{this.props.GetRecommend.title}</span>
			</div>:null}
			</div>)
	}
}
export default connect()(Findbanner)