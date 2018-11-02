import React,{Component} from "react"
import {connect} from "react-redux"
import "../index/index.css"
import "./movie.css"
import  {NavLink } from "react-router-dom";
import Hot from "./hot.js"
import Coming from "./coming.js"
import "./hot.css"
import "./coming.css"
import Footer from "../index/footer.js"
class Movie extends Component{
	render(){
		return(<div>
				<div className="mhead">
					<div className="onehead">
						<a href="/#index" className="headback"></a>
						<ul className="htable">
							
							<li><NavLink to="/movie/hot" activeClassName="currr"><span>正在热映</span></NavLink></li>
           					<li><NavLink to="/movie/coming" activeClassName="currr"><span>即将上映</span></NavLink></li>
						</ul>
					</div>
				</div>
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
				  {
				this.props.children
			}
			<Footer />
			</div>)
	}
}
export default connect()(Movie)