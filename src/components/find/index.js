import React,{Component} from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import axios from "axios"
class Find extends Component{
	render(){
		return(<div>
				<ul>
					<li><NavLink to="/find/news"></NavLink></li>
					<li><NavLink to="/find/review"></NavLink></li>
					<li><NavLink to="/find/toplist"></NavLink></li>
					<li><NavLink to="/find/trailer"></NavLink></li>
				</ul>
				{this.props.children}
			</div>)
	}
	componentDidMount(){
		axios.get('/Service/callback.mi/movie/Detail.api?movieId=219640&locationId=290&t=201810308333668503').then(res=>{
			console.log(res.data)
		})
	}
}
export default connect()(Find)