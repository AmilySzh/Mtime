import React,{Component} from "react"
import axios from "axios"
import "./index.scss"
class Toplistdetail extends Component{
	constructor(){
		super();
		this.state={
			topdata:null
		}
	}
	render(){
		return(<div id="toplistdetail"> {/**/}
			{this.state.topdata?<div className="toplistall">
				<div className="toplisthead">
					<h2>{this.state.topdata.topList.name}</h2>
					<p>{this.state.topdata.topList.summary}</p>
				</div>

				<ul className="toplist">
				{this.state.topdata.movies.map((item,index)=><li key={item.id} onClick={this.toContent.bind(this,item.id)} className="toplistli">
					<span className="indexnum">{index}</span>
					<div className="topright">
						<div className="toplistupper"> 
							<img src={item.posterUrl} alt=""/>
							<div className="toplisttext">
								<h3>{item.name}({item.decade})  <span>{item.rating}</span> <br/>
									<span>{item.nameEn}</span>
								</h3>
								<p className="toplistactor">
									<span>导演：&nbsp;{item.director}</span> <br/>
									<span>主演：&nbsp;{item.actor} {item.actor2}</span> <br/>
									<span>{item.releaseDate}&nbsp;{item.releaseLocation}</span>
								</p>
							</div>
						</div>
						<p className="toplistunder">{item.remark}</p>
					</div>
					</li>)
				}
				</ul>
			</div>:null}
			{this.props.children}
			</div>)
	}
	componentDidMount(){
		axios.get(`/Service/callback.mi/TopList/TopListDetails.api?t=201811115291753260&pageIndex=1&type=2&toplistId=${this.props.match.params.szh}&pageSubAreaID=1475`).then(res=>{
			console.log(res.data)
			this.setState({
				topdata:res.data
			})
		})
	}
	toContent(i){
		console.log(i)
		window.location.href=`http://movie.wap.mtime.com/${i}/`
		// this.props.history.push(`/finddetail/detail/${i}`)
	}
}
export default Toplistdetail