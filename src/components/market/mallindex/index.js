import React,{Component} from "react"
import {connect} from "react-redux"
import {NavLink} from 'react-router-dom'
import './index.scss'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class HeaderInput extends Component{
	constructor(){
		super()
		this.state = {
			isShow:false,
			infoList:null,
			current:0,
			maybelikeList:null
		}
	}

	render(){
		return(
			<div className="outer">
			{/*头部搜索框*/}
				<header>
					<NavLink to="/market/search">
						<div className="search" onClick={this.props.event}>
							<i className="iconfont">&#xe60b;</i>
							<span className="searchbar">搜索正版电影周边</span>
						</div>
						<div className="cart">
							<i className="iconfont">&#xe604;</i>
						</div>
					</NavLink>
				</header>
				{/*轮播*/}
				<div className="swiper-container">
				    <div className="swiper-wrapper">
				    {
				    	this.state.infoList ? 
				    	this.state.infoList.scrollImg.map((item)=>
				    		 <div className="swiper-slide swipe1" key={item.url}>
				     			<img src={item.image} alt=""/>
				      		 </div>
				      ): null
				    }
				    </div>
				  </div>
				  <div className="swiper-pagination bullet"></div>

				{/*小图标*/}

				<main>
					<ul>
						{
							this.state.infoList ? 
							this.state.infoList.navigatorIcon.map((item)=>
								<li key={item.url} onClick={this.smart2list.bind(this,item.url)}>
									<img src={item.image} alt=""/>
									<p>{item.iconTitle}</p>
								</li>
								):null
						}
					</ul>
				</main>
				<section>
					<div className="hot">
						<div className="left">
							<div className="up"></div>
							<div className="down"></div>
						</div>
						<div className="right">
							{
								this.state.infoList ? 
								this.state.infoList.cellC.list.map((item,index)=>
									<img src={item.image} key={index} alt=""/>
									): null
							}
						</div>
					</div>
				</section>
			{/*这就是灌篮*/}
				<div className="ad-guanlan">
					{
						this.state.infoList ?
						<img src={this.state.infoList.cellB.img} alt=""/>
						: null
					}
				</div>

				{/*icon2*/}
				<div className="nav-manlian">
					{
						this.state.infoList?
						this.state.infoList.topic.map((item,index)=>
							this.state.current===index ?
								<div className="backgroundimg" key={item.titleEn}>
									<img src={item.backgroupImage} alt=""/>
									<div className="topic-title">
										<h6>{item.titleEn}</h6>
										<h5>{item.titleCn}</h5>
									</div>
									<ul className="goodslist">
										{
											item.subList.map((item1)=>
												<li key={item1.goodsId} onClick={this.handle2Detail.bind(this,item1.goodsId)}>
													<img src={item1.image} alt=""/>
													<h3 className="goodsname">{item1.title}</h3>
												</li>
												)
										}
									</ul>
									<div className="moregoods">
										<div className="button">
											<span className="content">更多商品</span>
											<span className="icon">&gt;</span>
										</div>
									</div>
									
									
								</div>
							:null
						): null
					}


					<div className="slow-swiper">
					    <div className="swiper-wrapper">
					    {
					    	this.state.infoList ? 
					    	this.state.infoList.topic.map((item,index)=>
					      		<div className="swiper-slide" key={item.titleEn}>
					      			<img src={item.checkedImage} onClick={this.toList.bind(this,index)}/>
					      		</div>
					    	):null
					    }
					    </div>
					</div>
					
				</div>

			{/*玩具模型*/}
			{
				this.state.infoList?
				this.state.infoList.category.map((item)=>
					<div key={item.name} className="category">
						<span className="border" style={{background:item.colorValue}}></span>
						<h5 style={{color:item.colorValue}}>
							{item.name}
							<span className="category-more">更多</span>
						</h5>
						<div className="catebgc">
							<img src={item.image} alt=""/>
						</div>
						<ul className="category-list">
							{
								item.subList.map(item2=>
									<li className="category-all" key={item2.goodsId}  onClick={this.handle2Detail.bind(this,item2.goodsId)}>
										<img className="category-img" src={item2.image} alt=""/>
										<p className="category-name">{item2.title}</p>
									</li>
									)
							}
						</ul>
					</div>
					):null
				
			}
			
				{/*猜你喜欢*/}
				<div className="maybelike-title">
					<i className="iconfont">&#xec1e;</i>
					<span>你可能感兴趣的</span>
				</div>
				<ul className="maybelike">
					{
						this.state.maybelikeList ? 
						this.state.maybelikeList.map((item)=>
							<li className="maybelike-list" key={item.goodsId} onClick={this.handle2Detail.bind(this,item.goodsId)}>
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


			{/*奋力加载中*/}
			<div className="loading">
				奋力加载中...
			</div>

			{/*置顶*/}
			<i className="to-up iconfont" onClick={this.handle2Up.bind(this)}>
				&#xe654;
			</i>

			</div>
			)


	}


	componentDidMount(){
		// 轮播
		axios.get('/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2018103016561077896').then(res=>{
			console.log(res.data)
			this.setState({
				infoList:res.data
			},function(){
				var swiper = new Swiper('.swiper-container', {
			        loop: true,
			        autoplay:true,
			      	pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			      },
			    });
		       var swiper = new Swiper('.slow-swiper', {
		            slidesPerView: 4,
		            spaceBetween: 30,
		            width:window.screen.width
		          });
			})
		})

		//猜你喜欢
		axios.get('/Service/callback.mi/ECommerce/RecommendProducts.api?t=201810311456892212&goodsIds=107091&pageIndex=1').then(res=>{
			console.log(res.data)
			this.setState({
				maybelikeList:res.data.goodsList
			})
		})

		//置顶
		let scrollTop;
		window.onscroll=function(){
			scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;

			if(scrollTop>=755){
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

	//跳到详情
	handle2Detail(id){
		console.log(id)
		this.props.history.push('/market/item/' + id)
	}

	// 跳转列表页
	smart2list(urlInfo){
		var index=urlInfo.lastIndexOf("?");
		let url=urlInfo.slice(index+1);
		console.log(index,url,urlInfo)
		this.props.history.push(`/market/list/${url}`)
	}

	toList(id){
		this.setState({
			current:id
		})
	}

}
export default connect()(HeaderInput)