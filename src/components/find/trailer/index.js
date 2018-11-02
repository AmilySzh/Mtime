import React,{Component} from "react"
import {connect} from "react-redux"
import Findbanner from "../findbanner"
import Findfooter from "../findfooter"
import axios from "axios"
import "./index.scss"
class Trailer extends Component{
	constructor(){
		super();
		this.state={
			list:null
		}
	}
	render(){
		return(<div id="findtrailer">
			<Findbanner GetRecommend={this.props.findGetRecommend.review}></Findbanner>
			{
				this.state.list?<ul id="findtrailerlist">
					{
						this.state.list.map(item=><li key={item.id} onClick={this.Todetail.bind(this,item.id)}>
							<h3>{item.title}</h3>
							<p>
								<img src={item.userImage} alt=""/>
								<span>{item.nickname} -评分</span>
								<span> 《 {item.relatedObj.title} 》 </span>
								{item.relatedObj.rating?<span>
									{item.relatedObj.rating}
									</span>:null}
								
							</p>
						</li>)
					}
				</ul>:null
			}
			<Findfooter></Findfooter>
			</div>)
	}
	componentDidMount(){
		axios.get("/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=2018103018532799516").then(res=>{
			// console.log(res.data)
			this.setState({list:res.data})

		})
		
	}
	Todetail(i){
		this.props.history.push(`/finddetail/trailer/${i}`)
	}
}
export default connect((state)=>{
	return{
		findGetRecommend:state.findGetRecommend
	}
})(Trailer)