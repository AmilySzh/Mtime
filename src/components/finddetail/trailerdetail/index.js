import React,{Component} from "react"
import axios from "axios"
import "./index.scss"
class Trailerdet extends Component{
	constructor(){
		super();
		this.state={
			trailerdata:null
		}
	}
	render(){
		return(<div id="trailer">
			{this.state.trailerdata?<div>
				<div className="head">
					<h1>“{this.state.trailerdata.title}</h1>
					<div className="user">
						<img src={this.state.trailerdata.userImage} alt=""/>
						<p>{this.state.trailerdata.nickname} <br/> 
							<span>评《{this.state.trailerdata.relatedObj.title}》</span> 
							<b>{this.state.trailerdata.rating}</b>
						</p>
					</div>
					<img src={this.state.trailerdata.relatedObj.image} alt="" className="movielogo"/>
				</div>
				<div className="time">{this.state.trailerdata.time}</div>
				<div className="content">
			    	<div dangerouslySetInnerHTML = {{__html:this.state.trailerdata.content}}></div>
			    	{/**/}
			    </div>
			</div>:null}
			</div>)
	}
	componentDidMount(){
		axios.get(`/Service/callback.mi/Review/Detail.api?reviewId=${this.props.match.params.szh}&t=201811119375992348`).then(res=>{
			// console.log(res.data)
			this.setState({
				trailerdata:res.data
			})
		})
	}
}
export default Trailerdet