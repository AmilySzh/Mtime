import React,{Component} from "react"
import {connect} from "react-redux"
import "./footer.css"

class Footer extends Component{
	render(){
		return(
				<footer className="footer">
				  	<nav className="link">
				  		<ul className=" table_v_c">
				  			<li className="td on" data-selector="footnavli" data-page-id="0">
				  				<a href="#"><span>首页</span></a>
				  			</li>
				  			<li className="td" data-selector="footnavli" data-page-id="1">
				  				<a href="#"><span>购票</span></a>
				  			</li>
				  			<li className="td" data-selector="footnavli" data-page-id="8">
				  				<a href="#"><span>商城</span></a>
				  			</li>
				  			<li className="td" data-selector="footnavli" data-page-id="3">
				  				<a href="#"><span>发现</span></a>
				  			</li>
				  			<li className="td" data-selector="footnavli" data-page-id="4">
				  				<a href="#"><span>我的</span></a>
				  			</li>
				  		</ul>
				  	</nav>
				  	<div className="footlink">
				  		<ul className=" table_vh_c">
				  			<li className="">
				  				<a href="http://www.mtime.com/rdtopc"><span>PC版</span></a>
				  			</li>
				  			<li className="line"><span></span></li>
				  			<li className="">
				  				<a href="#!/download/" id="downloadApp"><span>客户端下载</span></a>
				  			</li>
				  			<li className="line"><span></span></li>
				  			<li className="">
				  				<a href="#!/reportError/"><span>意见反馈</span></a>
				  			</li>
				  			<li className="line"><span></span></li>
				  			<li className="">
				  				<a href="#!/help/helpCenter/"><span>帮助中心</span></a>
				  			</li>
				  		</ul>
				  	</div>
				  	<div className="copy">
				  		<p>
				  			<span></span>
				  				<a href="https://feature.mtime.cn/mobile/2018/licence/licence.html" className="honest">诚信亮标</a>
				  		</p>
				  		<p>
				  			<span>Copyright </span>
				  			<span className="copytime">2006-2018</span> 
				  			<span> Mtime.com Inc. All rights reserved.</span>
				  		</p>
				  	</div>
				  </footer>
			)

	}
}
export default connect()(Footer)