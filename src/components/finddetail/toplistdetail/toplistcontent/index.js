import React,{Component} from "react"
import axios from "axios"
import "../../../find/toplist/iconfont1/iconfont.css"
import { Drawer, Button } from 'antd';
import 'antd/dist/antd.css'
import "./index.scss"
class Toplistcontent extends Component{
	componentWillMount(){
		
	}
	constructor(){
		super();
		this.state={
			visible: false,
			topdetail:null
		}
	}
	render(){
		var divobj={width:"33%",float:"left",textAlign:"center"}
		var imgobj={width:"40%"}
		var obj={background:"rgba(0,0,0,.5)"}
		return(<div id="topdetail">
			{this.state.topdetail?<div>
				<div id="topdetailhead">
					<div id="topdetailnav">
						<i className="iconfont icon-fanhui-copy-copy" onClick={this.returnPrev.bind(this)}></i>
						<i className="iconfont icon-fenxiang" type="primary" onClick={this.showDrawer}></i>
					</div>
					
				</div>
			</div>:null}
			Toplistcontent---{this.props.match.params.szh}
			<Drawer 
	          title="分享"
	          closable={true}
	          onClose={this.onClose}
	          visible={this.state.visible}
	          placement="bottom"
	          height="160px"
	          maskStyle={obj}
	        >
	         <div style={divobj}>
	         	<img src="/shareimg/share06.png" alt="" style={imgobj}/>
	         	<p>新浪微博</p>
	         </div>
	         <div style={divobj}>
	         	<img src="/shareimg/share09.png" alt="" style={imgobj}/>
	         	<p>QQ空间</p>
	         </div>
	         <div style={divobj}>
	         	<img src="/shareimg/share07.png" alt="" style={imgobj}/>
	         	<p>时光网</p>
	         </div>
	        </Drawer>
			</div>)
	}
	componentDidMount(){
		document.querySelector("#finddetail #finddetailnav").style.display="none"
		axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.szh}&locationId=292&t=201811215952916`).then(res=>{
			// console.log(res.data)
			this.setState({
				topdetail:res.data
			})
		})
	}
	componentWillUnmount(){
		document.querySelector("#finddetail #finddetailnav").style.display="flex"
	}
	returnPrev(){
		let urlStr=window.location.hash
		let urlStart=window.location.hash.indexOf("finddetail")+11
		let urlEnd=window.location.hash.lastIndexOf("/")
		let secondRouter=urlStr.slice(urlStart,urlEnd)
		console.log(urlStr)
		console.log(secondRouter)
		this.props.history.push("/find/"+secondRouter)
	}
	showDrawer = () => {
    this.setState({
      visible: true,
    });
    console.log("showDrawer")
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
}
export default Toplistcontent