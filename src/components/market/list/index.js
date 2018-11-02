import React,{Component} from "react"
import {connect} from "react-redux"
import './index.scss'
import axios from 'axios'
import Search from '../search'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class List extends Component{

	constructor(){
		super()
		this.state = {
			list:null,
			isShow:false,
			current:0
		}
	}

	render(){
		return(<div>
				<Search prop={this.props.history}></Search>
			{/*导航*/}
				<ul className="nav">
					<li className="title" onClick={this.handle2ji.bind(this,0)}>
						<a href="">综合排序
							<i className="iconfont down">&#xe733;</i>
						</a>
						<ReactCSSTransitionGroup
								          transitionName="tobottom"
								          transitionEnterTimeout={500}
								          transitionLeaveTimeout={300}>
							{
								this.state.current === 0 ?
								this.state.isShow ? 
									<div className="nav-nav2">
										<ul className="nav2" >
											<li className="list2">综合排序</li>
											<li className="list2">价格从低到高</li>
											<li className="list2">价格从高到低</li>
											<li className="list2">好评率从高到低</li>
											<li className="list2">销量从高到低</li>
										</ul>
										<ul className="zhezhaoceng">
											
										</ul>
									</div>
									
									:null
									: null

								}
						 </ReactCSSTransitionGroup>
					</li>
					<li className="title" onClick={this.handle2ji.bind(this,1)}>
						<a href="">主题角色
							<i className="iconfont">&#xe733;</i>
						</a>
						{
							this.state.current === 1 ?
							this.state.isShow ?
							<ul className="title2">
								<li>全部</li>
								{
									this.state.list ?
									this.state.list.topics.map((item)=>
										<li key={item.ID} onClick={this.handleCategory.bind(this,item.ID)}>
											<img src={item.Logo} alt=""/>
											<span>{item.ShortTitle}</span>
										</li>
										):null
								}
							</ul>
							:null
							:null
						}
						
					</li>
					<li className="title">
						<a href="">服饰箱包
							<i className="iconfont">&#xe733;</i>
						</a>
					</li>
				</ul>

			{/*列表*/}  

			<section>
				<ul className="list">
					{
						this.state.list ? 
						this.state.list.content.goods.goodsList.map((item)=>
							<li className="goods" key={item.imageSrc} onClick={this.handle2Detail.bind(this,item.goodsId)}>
								<img src={item.imageSrc} alt=""/>
								<div className="goods-info">
									<div className="goods-title">
										<span className="goods-only">{item.goodsTip}</span>
										<span className="goods-name">{item.name}</span>
									</div>
									<p className="price">
										<span className="price1">￥{item.minSalePrice/100}</span>
										<span className="price2">{item.minSalePrice/100}</span>
									</p>
								</div>
								<span className="newgoods" style={{background:item.background}}>{item.iconText}</span>
								{
									item.saleOutStatus ? 
									<div className="null">
										<span>售空</span>
									</div>
									:null
									
								}
								
							</li>
						):null
					}
				</ul>
			</section>

			{/*置顶*/}
			<i className="to-up iconfont" onClick={this.handle2Up.bind(this)}>
				&#xe654;
			</i>


			{/*奋力加载中*/}
				<div className="loading">
					奋力加载中...
				</div>
			</div>)
	}

	// 综合排序
	handle2ji(index,el){
		el.preventDefault();
		el.stopPropagation()
		
		this.setState({
			isShow:!this.state.isShow,
			current:index
		})
		
		let i = document.querySelector('i.down');
		if(i.innerHTML === '&#xe733;'){
		 	i.innerHTML = '&#xe611;'	
		}else{
			i.innerHTML = '&#xe733;'
		}
		console.log(i.innerHTML)
	}
	// 分类
	handleCategory(id){
		axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=9&movieId=0&roleId=0&categoryId1=${id}&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=09FEE2DA6D9E946DEB4A5B3CD681AA83&t=201811114293248140`).then(res=>{
			console.log(id,res.data)
		})
	}


	handle2Detail(id){
		this.props.history.push('/market/item/'+id)
	}

	componentWillUnmount(){
		document.querySelector('#indexnav').style.display="flex"
	}


	componentDidMount(){
		document.querySelector('#indexnav').style.display="none"
		// console.log(this.props.match.params.info)
		let url = this.props.match.params.info
		let index = url.indexOf('=')
		let id = url.slice(index+1)
		// console.log(id)
		if(window.Number(id)){
			axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=${id}&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=71F897F89AAEB634CDD50109CA75CA7C&t=2018103117522174229`).then(res=>{
				console.log(res.data)
				this.setState({
					list:res.data
				})
			})	
		}else{
			let categoryname = encodeURIComponent(id);
			axios.get(`/Service/callback.mi/ECommerce/SearchGoods.api?keyword=${categoryname}&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=0&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=260ECF4403CCA7D704F5E218F24140BC&t=201810311858820134`).then(res=>{
				console.log(res.data)
				this.setState({
					list:res.data
				})
			})
		}


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
}
export default connect()(List)