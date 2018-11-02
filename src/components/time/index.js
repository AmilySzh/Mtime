import React,{Component} from "react"
import {connect} from "react-redux"
import axios from "axios"
import "./style.css"
import "./font/iconfont.css"
import Swiper from "swiper/dist/js/swiper.js"
import "swiper/dist/css/swiper.min.css"

class Time extends Component{
	constructor(){
		super();
		this.state={
			kist:null,
			current:0,
			isshow:null,
			tobulue:null
		}
	}
	render(){
		return (
			<div id="all">

			{this.state.kist?<div className="head">
				<ul>
					<li className="head1">
						<h2>{this.state.kist.cinema.name}</h2>
						{this.state.kist.cinema.feature.has3D===1?<span>3D</span>:null}
						{this.state.kist.cinema.feature.has4D===1?<span>4D</span>:null}
						{this.state.kist.cinema.feature.hasIMAX===1?<span>IMAX</span>:null}
						{this.state.kist.cinema.feature.hasLoveseat===1?<span>情侣座</span>:null}
						{this.state.kist.cinema.feature.hasWifi===1?<span>Wifi</span>:null}
						{this.state.kist.cinema.feature.hasPark===1?<span>P</span>:null}
					</li>
					<li className="head2">
						<i className="iconfont icon-dianhua"></i>
						<i className="iconfont icon-dibiao"></i>
					</li>

				</ul>
					
				</div>:null}

				{this.state.kist?<div className="swiper-container">
					   <div className="swiper-wrapper" >
					   {this.state.kist.movies.map((item,index)=><div className="swiper-slide" key={index} onClick={this.isShow.bind(this,item)}>
					   	<img src={item.img} alt=""/>

					   	
					   		 <span  
					   				className={this.state.current===index?"yes":"no"}
					   				onClick={this.changLight.bind(this,index)}>
					   		</span>
					
					   	
					   		{item.ratingFinal>=1?<span>{item.ratingFinal}</span>:null}
					   		
					   		<p>{item.title}</p>
					   	</div>)
					     
					   }  {/**/}
					   </div>
					 </div>:null}

					 {this.state.kist?<div className="tit">
					 		<ul className="title">
					 			{
					 				this.state.kist.movies.map((item,index)=><li key={index} className={this.state.isshow===item.movieId?"isshow":"ishide"} >
					 						<h2>{item.title}</h2>
					 						<p>{item.length}-{item.type}</p>
					 						<span className="right">&lt;</span>
					 					
					 						<div className="yo">
					 							{item.showDates.map((item1,index)=><span onClick={this.toBlue.bind(this,item1)} className={this.state.toblue===item1?"toblue":""}>{item1}</span>)}
					 						</div>
					 					</li>)
					 			}
					 		</ul>

					 		
					 		<div id="timelist">
					 		{
					 			this.state.kist.showtimes.map((item,index)=><div key={index} 
					 				className={this.state.isshow==item.movieId&&this.state.toblue===item.moviekey.slice(item.moviekey.indexOf("_")+1)?"disblock":"disnone"} >
					 				{item.list.map((item,index)=><div  key={index}>
					 					<ul className="mai">
					 					<li className="startTime">
					 						<h1>10:00</h1>
					 						<span>12:10散场</span>
					 					</li>
					 					<li className="startTime1">
					 						<span>{item.versionDesc}</span>/<span>{item.hall}</span>/<span>{item.language}</span>
					 					</li>
					 					<li className="startTime2">
					 						<span>￥{item.dsBoxPrice/100}</span>
					 						
					 					</li>
					 					<li className="startTime3"><b>购票</b></li>
					 					</ul>
					 					</div>)}
					 				</div>)
					 		}
					 	</div>
					 </div>:null}



			</div>
			)
	}

	componentDidMount(){
		axios.get(`/cinema/showtime.api?t=20181118584781924&cinemaId=${this.props.match.params.dora}`).then(res=>{
			console.log(res.data.data)
				this.setState({
					kist:res.data.data,
					isshow:res.data.data.movies[0].movieId,
					isdates:res.data.data.movies[0].movieId,
					toblue:res.data.data.movies[0].showDates[0]
				},()=>{
					var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 4,
					      centeredSlides: true,
					      spaceBetween: 30,
					      grabCursor: true,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					    });
				})

		})
	}
	changLight(index){
		this.setState({
			current:index,
			toblue:0
		})
	}
	isShow(i){
		this.setState({
			isshow:i.movieId,
			toblue:i.showDates[0]
		})
		// console.log(i)
	}
	toBlue(i){
		this.setState({
			toblue:i
		})
		// console.log(i)
	}
}

export default connect()(Time)
