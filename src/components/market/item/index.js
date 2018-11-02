import React,{Component} from "react"
import {connect} from "react-redux"
import axios from 'axios'
import './index.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Detail from './public/detail'
import Guige from './public/guige'
import Xuzhi from './public/xuzhi'


class Item extends Component{

	constructor(){
		super()
		this.state = {
			detailList:null,
			maybelikeList:null,
			current:0
		}
	}

	render(){
		let userMessage;
	  	if (this.state.current === 0) {
		    userMessage = (
		     <Detail valueid={this.props}/>
		    )
	  	} else if(this.state.current === 1) {
		    userMessage = (
		      <Guige valueid={this.state.detailList}/>
		    )
	  	}else{
		  	userMessage = (
		  	  <Xuzhi valueid={this.state.detailList}/>
		  	)
	  }

		return(<div id="all">
				<nav>
					<i className="iconfont back"  onClick={()=>{
						console.log(this.props)
						this.props.history.goBack()
					}}>&#xe601;</i>
					<div className="right">
						<i className="iconfont">&#xe632;</i>
						<i className="iconfont">&#xe604;</i>
						<i className="iconfont">&#xe609;</i>
					</div>
				</nav>
				<div id="info">
					{
						// this.state.detailList ?
						// Object.keys(this.state.detailList).map(key => console.log(this.state.detailList))
						// // Object.keys(this.state.detailList.goods).forEach(key => console.log(key, this.state.detailList.goods[key]))
						// :null
						this.state.detailList ? 
							<div className="info-1">
								{
									<div className="swiper-container">
									   <div className="swiper-wrapper">
									     	{
									     		this.state.detailList.goods.imageRects.map((item,index)=>
									     			<div className="swiper-slide list" key={index}>
     													<img src={item} alt=""/>
     												 </div>
     												)
									     	}
									     </div>
									   <div className="swiper-pagination"></div>
									 </div>
								}
								<p className="info-1-name">
									<span className="only">{this.state.detailList.goods.goodsTip}</span>
									<span className="name">{this.state.detailList.goods.longName}</span>
									
								</p>
								<p className="price">
									￥<span>{this.state.detailList.goods.maxSalePrice/100}</span>
									<span>登录享受会员价</span>
								</p>
								<p className="sale-price">
									市场价
									<span>￥{this.state.detailList.goods.marketPrice/100}</span>
								</p>
								<p className="desc">
									<span>免</span>
									<span>{this.state.detailList.goods.postAgeText}</span>
								</p>
								<p className="select">
									选择颜色
									<span>尺码</span>
								</p>
							</div>
							:null
					}

					<div id="pingjia">
						<h2></h2>
						<div></div>
					</div>
				</div>

			{/*选项卡*/}
				<ul className="nav3">
					<li onClick={this.handlexuanxinag.bind(this,0)} className={this.state.current === 0 ? 'focus' :null}>图文详情</li>
					<li onClick={this.handlexuanxinag.bind(this,1)} className={this.state.current === 1 ? 'focus' :null}>规格参数</li>
					<li onClick={this.handlexuanxinag.bind(this,2)} className={this.state.current === 2 ? 'focus' :null}>购买须知</li>
				</ul>
				{userMessage}


				{/*猜你喜欢*/}
				<div className="maybelike-title">
					<i className="iconfont">&#xec1e;</i>
					<span>你可能感兴趣的</span>
				</div>

				<ul className="maybelike">
					{
						this.state.maybelikeList ? 
						this.state.maybelikeList.map((item)=>
							<li className="maybelike-list" key={item.goodsId}>
								<img src={item.image} alt=""/>
								<div className="info">
									<div className="title">
										<span className="only">{item.goodsTip}</span>
										<span className="name">{item.name}</span>
									</div>
									<p className="price">￥{item.minSalePrice/100}</p>
								</div>
								<span className="newgoods" style={{background:item.background}}>{item.iconText}</span>
							</li>
							):null
					}
				</ul>

				{/*置顶*/}
				<i className="to-up iconfont" onClick={this.handle2Up.bind(this)}>
					&#xe654;
				</i>


				{/*footer*/}
				<footer>
					<ul className="left">
						<li>
							<i className="iconfont">&#xe69f;</i>
							<span>咨询</span>
						</li>
						<li>
							<i className="iconfont">&#xe666;</i>
							<span>收藏</span>
						</li>
					</ul>
					<ul className="right">
						<li><a href="">加入购物车</a></li>
						<li><a href="">立即购买</a></li>
					</ul>
				</footer>


			</div>)
	}

	componentWillUnmount(){
		document.querySelector('#indexnav').style.display="flex"
	}

	componentDidMount(){
		// console.log(this.props)
		document.querySelector('#indexnav').style.display="none"
		axios.get(`/Service/callback-mall.mi/product/detail.api?goodsId=${this.props.match.params.id}&locationId=290&t=201811114425663920`).then(res=>{
			// console.log(res.data.data)
			this.setState({
				detailList:res.data.data.productDetail
			},()=>{
				var swiper = new Swiper('.swiper-container', {
					loop:true,
				      pagination: {
				        el: '.swiper-pagination',
				      },
				    });
			})
		})


		//猜你喜欢
		axios.get(`/Service/callback.mi/ECommerce/RecommendProducts.api?t=20181121355352280&goodsIds=${this.props.match.params.id}&pageIndex=1`).then(res=>{
			console.log(res.data)
			this.setState({
				maybelikeList:res.data.goodsList
			})
		})


		let scrollTop;
		window.onscroll=function(){
			scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;

			if(scrollTop>=600){
				document.querySelector('.to-up').style.display = 'block'
			}else{
				document.querySelector('.to-up').style.display = 'none'
			}
		
		}
	}


	// 去顶部
	handle2Up(){
		let id;
		id = setInterval(function () {
			var current = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
			if(current === 0) {
				clearInterval(id);
			}
			document.body.scrollTop = current - current;
			document.documentElement.scrollTop = current - current;
		}, 15)
	}

	handlexuanxinag(index){
		this.setState({
			current:index
		})
	}

	componentWillUnmount(){
		window.onscroll=null
	}
}
export default connect()(Item)