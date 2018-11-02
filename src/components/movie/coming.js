import React,{Component} from "react"
import {connect} from "react-redux"
import img from "./1.png"
import axios from "axios"
class Coming extends Component{
		constructor(){
		super();
		this.state={
			list:null,
			toop:[11]
		}

	}
	componentDidMount(){
		axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=20181121429579128").then(rest=>{
			console.log(rest.data.moviecomings)
			this.setState({
				list:rest.data.moviecomings
				
			})
		})
	}
	render(){
		return(<div className="coming">
				<img src={img} />
				<div className="hot">
				<b className="hoot">即将上映(58部)</b>
					<ul>
					<div className="yue" >11月</div>
					{
					this.state.list?
					this.state.list.map(item=><div key={item.id}>
					{
						item.rDay<=1?<div className="yue" >{item.rMonth}月</div>:<a></a>
					}
						<li>
							<span className="ri">{item.rDay}日</span>
							<img src={item.image}/>
							<div className="hotrightt">
								<b id="right1">{item.title}</b>				
								<span className="right33"> {item.wantedCount}人想看 - 动画</span>
								<b className="right6">导演：{item.director}</b>
								<span className="right71">超前预售</span>
								<span className="right72">预告片</span>
							</div>
							</li>
							</div>):null
			}
					</ul>

					</div>
			</div>)
	}
}
export default connect()(Coming)