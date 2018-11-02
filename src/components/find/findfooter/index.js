import React,{Component} from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import "./index.scss"
class Findfooter extends Component{
	render(){
		return(<footer id="findfooter">
				<ul>
		          <li><NavLink to="/index" >首页</NavLink></li>
		          <li><NavLink to="/buyticket" >购票</NavLink></li>
		          <li><NavLink to="/market" >商城</NavLink></li>
		          <li><NavLink to="/find">发现</NavLink></li>
		        </ul>
			</footer>)
	}
}
export default connect()(Findfooter)