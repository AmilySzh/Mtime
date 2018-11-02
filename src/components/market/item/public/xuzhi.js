import React,{Component} from "react"
import {connect} from "react-redux"
import './public.scss'

class Xuzhi extends Component{
	constructor(){
		super()
		this.state = {
			infoList:null
		}
	}
	render(){
		return(<div>
				{
					this.state.infoList ? 
					<div id="xuzhi" dangerouslySetInnerHTML = {{ __html:this.state.infoList.note }}>
							
					</div>
					:null
				}
			</div>)
	}

	componentDidMount(){
		console.log(this)
		this.setState({
			infoList:this.props.valueid.goods
		})
	}
}
export default connect()(Xuzhi)