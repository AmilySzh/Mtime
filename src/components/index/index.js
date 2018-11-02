import React,{Component} from "react"
import {connect} from "react-redux"
import "./haha/icon/iconfont.css"
import "./index.css"
import axios from "axios"
import Footer from "./footer.js"
class Index extends Component{
	constructor(){
		super();
		this.state={
			list:null,
			haha:null
		}

	}
	componentDidMount(){
		axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20181111056711852").then(rest=>{
			this.setState({
				list:rest.data.ms
			})
		})
		axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201811113233889976").then(rest=>{
			this.setState({
				haha:rest.data.hotPoints
			})
		})

	}
	render(){
		return(<div className="box">
				<div className="movie_search">
					<div className="hea_search">
				  	  		<div className="cityshow">
						  		<b>北京</b>
						  		<i className="i_block i_city"></i>
				  			</div>
				  			<p className="input">
				  				<a href="/#/search">
				  				<span>影片/影院/影人，任你搜</span>
				  				</a>
				  			</p>
				  	</div> 
				  </div>
				
				  <div className="indexmovie">
				  	<h2>
				  		<a href="/#/movie/hot">
				  			<i className="iconfont icon-dayuhao"></i>
				  			<b>正在热映（62部）</b> 
				  		</a>
				  	</h2>
				  	<ul>
				  	{
				  		this.state.list?
				  		this.state.list.map(item=>
				  			<li key={item.id}>
				  				<a href="#!/movie/227422/">
				  					<div className="mpic">
				  						<img src={item.img}/>
				  						<i className="m_score">{item.r}</i>			  					
				  						</div>
				  					<p>
				  						<span>{item.t}</span>
				  					</p>
				  				</a>
				  			</li>
				  			):null
				  	}				  
				  	</ul>
				  	<h2>
				  		<a href="/#/movie/coming">
				  			<i className="iconfont icon-dayuhao"></i>
				  			<b>即将上映（60部）</b> 
				  		</a>
				  	</h2>
				  </div>
				  <div className="shopmid">
				  		<a href="https://feature.mtime.cn/mobile/item/2018/Mug/">
				  			<img src="http://img5.mtime.cn/mg/2018/07/31/143906.61810640.jpg" className="m_img"/>
				  			<div className="countdown"></div>
				  		</a>
				  	</div>
				  <div className="m_bg_white todayhot">
				  	<h2>
				  		<a href="javascript:void(0)">
				  			<b>今日热点</b>
				  		</a>
				  	</h2>
				  	<ul >
				  	{
				  		this.state.haha?
				  		this.state.haha.map(item=>
				  			<li key={item.id}>
				  				<div className="table">
				  					<div className="todaypic">
				  						<a href="#!/news/movie/1584482/">
				  							<img className="m_imgg img_box" src={item.img}/>
				  						</a>
				  					</div>
				  					<div className="todaytxt td">
				  						<h2>
				  							<a href="#!/news/movie/1584482/">{item.title}</a>
				  						</h2>
				  						<p>
				  							<span>{item.desc}</span>
				  						</p>
				  						<p>
				  							<time>2018-10-05 16:13:36</time>
				  						</p>
				  					</div>
				  				</div>
				  			</li>):null
				  	}
				  		
				  	</ul>
				  </div>
				  <Footer/>
				</div>)
	}
}
export default connect()(Index)