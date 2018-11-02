import React,{Component} from "react"
import {connect} from "react-redux"
import axios from "axios"
class Hot extends Component{
	constructor(){
		super();
		this.state={
			list:null
		}

	}
	componentDidMount(){
		axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20181121310694083").then(rest=>{
			console.log(rest.data.ms)
			this.setState({
				list:rest.data.ms
				
			})
		})
	}
	render(){
		return(<div className="hot">
			<ul>
			{
				this.state.list?
				this.state.list.map(item=>
				<li key={item.id}>
					<img src={item.img}/>
					<div className="hotright">
						<b className="right1">{item.t}</b>
						<i className="right2">&nbsp;{item.r} &nbsp;</i>
						<span className="right3">“{item.commonSpecial}”</span>
						<i className="right4"></i>
						<i className="right5"></i><br/>
						<b className="right6">{item.cC}家影院上映{item.NearestShowtimeCount}场</b>
						<span className="right7">购票</span>
					</div>
				</li>):null
			}
			</ul>

			</div>)
	}
}
export default connect()(Hot)