import React,{Component} from "react"
import {connect} from "react-redux"
import Findbanner from "../findbanner"
import Findfooter from "../findfooter"
import axios from "axios"
import "./index.scss"
class News extends Component{
	constructor(){
		super();
		this.state={
			pageIndex:1,
			list:null
		}
	}
	render(){
		return(<div id="findnew">
			<Findbanner GetRecommend={this.props.findGetRecommend.news}></Findbanner>
			{this.state.list?<ul id="findnewlist">
				{
					this.state.list.map(item=><li key={item.id} onClick={this.Todetail.bind(this,item.id)}>
						<div><img src={item.image} alt=""/></div>
						<h4>
							{item.title} <br/>
							{
								item.commentCount?<span>评论：{item.commentCount}</span>:null
							}
						</h4>
					</li>)
				}
			</ul>:null}
			<div id="morenewlist" onClick={this.getMoreNewlist.bind(this)}>查看更多</div>
            <Findfooter></Findfooter>
			</div>)
	}
	componentDidMount(){
		axios.get(`/Service/callback.mi/News/NewsList.api?t=2018103013101841136&pageIndex=${this.state.pageIndex}`).then(res=>{
			console.log(res.data.newsList)
			this.setState({
				pageIndex:this.state.pageIndex+1,
				list:res.data.newsList
			},()=>{console.log(this.state.pageIndex)})
		})
	}
	getMoreNewlist(){
		axios.get(`/Service/callback.mi/News/NewsList.api?t=2018103013101841136&pageIndex=${this.state.pageIndex}`).then(res=>{
			this.setState({
				pageIndex:this.state.pageIndex+1,
				list:[...this.state.list,...res.data.newsList]
			},()=>{console.log(this.state.pageIndex)})
		})
	}
	Todetail(i){
		this.props.history.push(`/finddetail/news/${i}`)
	}
}
export default connect((state)=>{
	return{
		findGetRecommend:state.findGetRecommend
	}
},null)(News)