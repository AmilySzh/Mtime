import React,{Component} from "react"
import "../find/toplist/iconfont1/iconfont.css"
import "./index.scss"
import Findfooter from "../find/findfooter"
import "../find/toplist/iconfont1/iconfont.css"
import { Drawer, Button } from 'antd';
import 'antd/dist/antd.css'
class Finddetail extends Component{
	constructor(){
		super();
		this.state={
			visible: false
		}
	}
	render(){
		var divobj={width:"33%",float:"left",textAlign:"center"}
		var imgobj={width:"40%"}
		var obj={background:"rgba(0,0,0,.5)"}
		return(<div id="finddetail">
			<div id="finddetailnav">
				<i className="iconfont icon-fanhui-copy-copy" onClick={this.returnPrev.bind(this)}></i>
				<i className="iconfont icon-fenxiang" type="primary" onClick={this.showDrawer}></i>
			</div>
			{this.props.children}
			<span id="findtoTOP" onClick={this.toTop.bind(this)}> <i className="iconfont icon-fanhuidingbu"></i> </span>
			<Findfooter></Findfooter>
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
		document.querySelector("#indexnav").style.display="none"
		window.onscroll=function(){
			if(document.documentElement.scrollTop>=100){
				document.querySelector("#findtoTOP").style.display="block"
			}else{
				document.querySelector("#findtoTOP").style.display="none"
			}
		}
	}
	componentWillUnmount(){
		document.querySelector("#indexnav").style.display="flex"
		window.onscroll=null;
	}
	// 平滑toTop
	toTop(){
		var topdistance=document.documentElement.scrollTop
		var intervalId=setInterval(function(){
			if(topdistance<=0){clearInterval(intervalId)}
			document.documentElement.scrollTop=topdistance-=50
		},30)
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
    // console.log("showDrawer")
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

}
export default Finddetail