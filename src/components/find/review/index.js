import React,{Component} from "react"
import {connect} from "react-redux"
import Findbanner from "../findbanner"
import Findfooter from "../findfooter"
import axios from "axios"
import "./index.scss"
import "../toplist/iconfont1/iconfont.css"
class Review extends Component{
	constructor(){
		super();
		this.state={
			list:null
		}
	}
	render(){
		return(<div id="findreview">
			<Findbanner GetRecommend={this.props.findGetRecommend.trailer}></Findbanner>
			{this.state.list?<ul id="findreviewlist">
				{
					this.state.list.map(item=><li key={item.id}>
						<div><img src={item.coverImg} alt=""/> <i className="iconfont icon-you"></i></div>
						<h4>{item.movieName} <br/> <span>{item.summary}</span></h4>
					</li>)
				}
			</ul>:null}
			<Findfooter></Findfooter>
			</div>)
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=2018103014494948193').then(res=>{
			// console.log(res.data.trailers)
			this.setState({list:res.data.trailers})
		})
	}
}
export default connect((state)=>{
	return{
		findGetRecommend:state.findGetRecommend
	}
})(Review)