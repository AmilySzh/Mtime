import React,{Component} from "react"
import {connect} from "react-redux"
import Findbanner from "../findbanner"
import Findfooter from "../findfooter"
import "./iconfont/iconfont.css"
import "./iconfont1/iconfont.css"
import "./index.scss"
import axios from "axios"
class Toplist extends Component{
	constructor(){
		super();
		this.state={
			pageIndex:1,
			list:null
		}
	}
	render(){
		return(<div id="findtoplist">
			<Findbanner GetRecommend={this.props.findGetRecommend.topList}></Findbanner>
			<ul id="toplistnav">
				<li><i className="iconfont icon-paihangcheng"></i> <br/> 时光Top100</li>
				<li><i className="iconfont icon-paihang"></i> <br/> 华语Top100</li>
				<li><i className="iconfont icon-yeji"></i> <br/> 全球票房榜</li>
			</ul>
			{this.state.list?<ul id="topList">
				{this.state.list.map(item=><li key={item.id} onClick={this.Todetail.bind(this,item.id)}>
					<h3>{item.topListNameCn}</h3>
					<p>{item.summary}</p>
					<span><i className="iconfont icon-you"></i></span>
				</li>)}
			</ul>:null}
			<div id="morenewlist" onClick={this.getMoreNewlist.bind(this)}>查看更多</div>
			<Findfooter></Findfooter>
			</div>)
	}
	componentDidMount(){
		axios.get(`/Service/callback.mi/TopList/TopListOfAll.api?t=2018103015454631516&pageIndex=${this.state.pageIndex}`).then(res=>{
			// console.log(res.data.topLists)
			this.setState({
				pageIndex:this.state.pageIndex+1,
				list:res.data.topLists
			})
		})
	}
	getMoreNewlist(){
		axios.get(`/Service/callback.mi/TopList/TopListOfAll.api?t=2018103015454631516&pageIndex=${this.state.pageIndex}`).then(res=>{
			this.setState({
				pageIndex:this.state.pageIndex+1,
				list:[...this.state.list,...res.data.topLists]
			},()=>{console.log(this.state.pageIndex)})
		})
	}
	Todetail(i){
		this.props.history.push(`/finddetail/toplist/${i}`)
	}
}
export default connect((state)=>{
	return{
		findGetRecommend:state.findGetRecommend
	}
})(Toplist)