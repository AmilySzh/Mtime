import React,{Component} from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import axios from "axios"
import "./index.scss"
import "./toplist/iconfont1/iconfont.css"
class Find extends Component{
	constructor(){
		super();
		this.state={
			appearToTop:false
		}
	}
	render(){
		return(<div id="find">
				<ul id="findnav">
					<li><NavLink to="/find/news" activeClassName="findactive">新闻</NavLink></li>
					<li><NavLink to="/find/review" activeClassName="findactive">预告片</NavLink></li>
					<li><NavLink to="/find/toplist" activeClassName="findactive">排行榜</NavLink></li>
					<li><NavLink to="/find/trailer" activeClassName="findactive">影评</NavLink></li>
				</ul>
				<div id="list">
					{this.props.children}
				</div>
				<span id="findtoTOP" onClick={this.toTop.bind(this)}> <i className="iconfont icon-fanhuidingbu"></i> </span>
			</div>)
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201810309133591239').then(res=>{
			this.props.changefindGetRecommend(res.data)
		})
		// toTop标记的显示隐藏
		window.onscroll=function(){
			if(document.documentElement.scrollTop>=1000){
				document.querySelector("#findtoTOP").style.display="block"
			}else{
				document.querySelector("#findtoTOP").style.display="none"
			}
		}
	}
	componentWillUnmount(){
		window.onscroll=null;
	}
	// 平滑toTop
	toTop(){
		var topdistance=document.documentElement.scrollTop
		var intervalId=setInterval(function(){
			if(topdistance<=0){clearInterval(intervalId)}
			document.documentElement.scrollTop=topdistance-=50
		},30)
	}
}
export default connect((state)=>{
	return {findGetRecommend:state.findGetRecommend}
},{
	changefindGetRecommend(data){
		return{
			type:"changefindGetRecommend",
			payload:data
		}
	}
})(Find)