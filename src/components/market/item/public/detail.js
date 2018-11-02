import React,{Component} from "react"
import {connect} from "react-redux"
import './public.scss'
import axios from 'axios'

class Detail extends Component{
	constructor(){
		super()
		this.state = {
			infoList:null
		}
	}
	render(){
		return(<div className="detail">
				{
					this.state.infoList ? 
					this.state.infoList.map((item,index)=>
						<img src={item.image} key={index} alt=""/>
						)
					:null
				}
			</div>)
	}

	componentDidMount(){
		axios.get(`/Service/callback.mi/ECommerce/GoodsImageTextInfo.api?t=201811212333262505&goodsId=${this.props.valueid.match.params.id}&pageIndex=1`).then(res=>{
			console.log(res.data)
			this.setState({
				infoList:res.data.contentList
			})
		})
	}
}
export default connect()(Detail)