import React,{Component} from "react"
import {connect} from "react-redux"
import './index.scss'
import {NavLink} from 'react-router-dom'

class Search extends Component{
	constructor(){
		super()
		this.state = {
			
		}
	}

	render(){
		return(
			<div>
				<div className="header">
					<i className="iconfont back" onClick={()=>{
						console.log(this.props)
						this.props.prop.goBack()
					}}>&#xe601;</i>
					
					<div className="input">
						<i className="iconfont search">&#xe60b;</i>
						<input type="text" placeholder="搜索正版电影周边"/>
					</div>
					<div className="button">搜索</div>
				</div>
			</div>
			)
	}


	
	componentWillUnmount(){
		window.onscroll=null
	}

}
export default connect()(Search)