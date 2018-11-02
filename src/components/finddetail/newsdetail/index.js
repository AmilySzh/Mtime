import React,{Component} from "react"
import Swiper from "swiper/dist/js/swiper.js"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
import "./index.scss"
class Newsdetail extends Component{
	constructor(){
		super();
		this.state={
			newsdata:null
		}
	}
	render(){
		return(<div id="Newsdetail">
			{this.state.newsdata?<div id="Newsdetailcontent" >
		{/**/}  {this.state.newsdata.type===1?<div id="type1"><div className="swiper-container">
					    <div className="swiper-wrapper">
					    {this.state.newsdata.images.map(item=><div className="swiper-slide" key={item.gId}>
					    	<img src={item.url1} alt=""/>
					    	<span>{item.desc}</span>
					    	<div className="swiper-button-next"></div>
					    <div className="swiper-button-prev"></div>
					    	</div>)
					    }
					    </div> 
					</div>
					<div className="detailcontent">
						<h2>{this.state.newsdata.title}</h2>
						<p>{this.state.newsdata.time} <span>{this.state.newsdata.source}</span></p>
						<div dangerouslySetInnerHTML = {{__html:this.state.newsdata.content}}></div>
					</div>
				</div>:null}
				{this.state.newsdata.type===0?<div id="type0">
					<h2>{this.state.newsdata.title}</h2>
					<p className="myp">{this.state.newsdata.time} 
						<span>评论:{this.state.newsdata.commentCount} &nbsp;相关电影/影人</span>
					</p>
					<div dangerouslySetInnerHTML = {{__html:this.state.newsdata.content}}></div>
				</div>:null}
				{this.state.newsdata.type===2?<div id="type2">
					<h2>{this.state.newsdata.title}</h2>
					<p className="myp">{this.state.newsdata.time} 
						<span>评论:{this.state.newsdata.commentCount} &nbsp;相关电影/影人</span>
					</p>
					<div dangerouslySetInnerHTML = {{__html:this.state.newsdata.content}}></div>
				</div>:null}
			</div>:null}
			</div>)
	}
	componentDidMount(){
		axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.props.match.params.szh}&t=2018103116213159255`).then(res=>{
			console.log(res.data)
			this.setState({newsdata:res.data},()=>{
				var swiper=new Swiper('.swiper-container', {
			      navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			    });
			})
		})
		
	}
}
export default Newsdetail