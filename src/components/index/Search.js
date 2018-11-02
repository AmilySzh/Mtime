import React,{Component} from "react"
import {connect} from "react-redux"
import Footer from "./footer.js"
import "./Search.css"
class Search extends Component{
	render(){
		return(<div>
			<div className="header">
					<div className="head_searchh">
						<div className="table_v_cc">
							<a className="h_btn_back" href="/#index"></a>
							<input className="searchText" type="text" className="td" placeholder="影片/影院/影人，任你搜"/>
							<a className="i_search_clear"></a>
							<a className="searchBtn" className="b_search"><span>搜索</span></a>
						</div>
					</div>
			</div>
 			<img className="imgg" src="http://static1.mtime.cn/feature/mobile/banner/2018/1031/s11750175.jpg"/>
 			<h2 className="search_title"><b>热门搜索</b></h2>
			<div className="search_key">
				<span>铁血战士</span>
				<span>毒液</span>
				<span>滴答屋</span>
				<span>神奇动物2</span>
				<span>无敌破坏王2</span>
			</div>
			<Footer />
		</div>)
	}
}
export default connect()(Search)