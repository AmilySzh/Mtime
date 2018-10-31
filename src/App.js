import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './App.scss';
import "./components/find/toplist/iconfont1/iconfont.css"
class App extends Component {
  constructor(){
    super()
    this.state={
 
    }
  }
  render() {
    return (
      <div>
        <ul id="indexnav">
          <li><img src="/logo_mtime.png" alt=""/></li>
          <li><NavLink to="/index" activeClassName="active">首页</NavLink></li>
          <li ><NavLink to="/buyticket" activeClassName="active">购票</NavLink></li>
          <li >
            <NavLink to="/market" activeClassName="active">商城</NavLink> 
            <i className="iconfont icon-NEW"></i>
          </li>
          <li><NavLink to="/find" activeClassName="active">发现</NavLink></li>
          <li><i className="iconfont icon-tubiaolunkuo-"></i></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
 
}

export default App;
