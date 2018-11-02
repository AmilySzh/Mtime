import React,{Component} from "react"
import {connect} from "react-redux"
import "./style.css"
import "./lconfont/iconfont.css"
import axios from "axios"

class Buyticket extends Component{
	constructor(){
		super();
		this.state={
			list:null
		}
	}
	render(){
		return(<div id="box">

			<div className="header">
				<div className="a789">
					<b>杭州</b>
					<i></i>
				</div>
				<input type="text" placeholder="筛选影院" />
				<i className="v iconfont icon-fangdajing" ></i>
				<a href="">搜索</a>
			</div>

			<div className="nav">
				<ul className="navv">
					<li>
						<span>离我最近</span>
						<i></i>
							{/*<ul className="two">
								<li>
									<p>离我最近</p>
									<p>价格最低</p>
								</li>
							</ul>*/}
					</li>

					<li>
						<span>全城</span>
						<i></i>
					</li>

					<li className="navs">
						<span>影厅特效</span>
						<i></i>
					</li>

				</ul>
			</div>

			<div className="banner"></div>

			<div className="shua">
				<i></i>
				<p className="po">位置获取失败，请开启定位功能</p>
				<a href="" className="pt">刷新</a>
			</div>


			<div className="ff">
			<p className="fff">以下影院均非时光网自营</p>
			</div>
			{this.state.list?<div className="lie">
			<ul>
				{
					this.state.list.map(item=><li key={item.cinemaId}>
						<div className="listtitle" onClick={this.toTime.bind(this,item.cinemaId)}>
							<p className="list1">
								<span className="s1">{item.cinameName}</span>
								<span className="s2"><b>{item.minPrice/100}</b>元起</span>
							</p>
							<p className="list2">{item.address}</p>
							<div className="littelogo">
								{item.feature.has3D===1?<span>3D</span>:null}
								{item.feature.hasFeature4D===1?<span>4D</span>:null}
								{item.feature.hasLoveseat===1?<span>情侣座</span>:null}
								{item.feature.hasFeatureDolby===1?<span>杜比</span>:null}
								{item.feature.hasIMAX===1?<span>IMAX</span>:null}
								{item.feature.hasFeatureHuge===1?<span>巨幕</span>:null}
							</div>
						</div>
						</li>)
				}
			</ul>
			</div>:null}

			<div className="footer">

				<div className="footer1">
					<ul className="in">
					<li><a href="#">首页</a></li>
					<li><a href="#">购票</a></li>
					<li><a href="#">商城</a></li>
					<li><a href="#">发现</a></li>
					<li><a href="#">我的</a></li>
					</ul>
				</div>

				<div className="footer2">
					<ul className="mo">
					<li><a href="#">pc端</a></li>
					<li><a href="#">客户端下载</a></li>
					<li><a href="#">意见反馈</a></li>
					<li><a href="#">帮助中心</a></li>
					</ul>
				</div>

				<div className="footer3">
						<i className="img1"></i>
						<i className="img2"></i>
						<p>Copyright 2006-2017 Mtime.con.Inc.All rights reserved.</p>
				</div>

			</div>
			

			</div>)


	}

	componentDidMount(){
		axios.get("/api/proxy/ticket/onlineCinemasByCity.api?locationId=974&_=1540887106414").then(res=>{
		console.log(res.data.data.cinemaList.slice(0,99))
			this.setState({
				list:res.data.data.cinemaList.slice(0,99)
			})
		})

	}
	toTime(i){
		this.props.history.push(`/time/${i}`)
	}





}
export default connect()(Buyticket)