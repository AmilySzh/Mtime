import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './App.scss';
class App extends Component {

  constructor(){
    super()
    this.state= {
      isShow:true
    }
  }

  render() {
    return (
      <div> 
        <ul id="indexnav">
          <li><NavLink to="/index" activeClassName="active">首页</NavLink></li>
          <li><NavLink to="/buyticket" activeClassName="active">购票</NavLink></li>
          <li><NavLink to="/market" activeClassName="active">商城</NavLink></li>
          <li><NavLink to="/find" activeClassName="active">发现</NavLink></li>
        </ul>
       
        {this.props.children}
      </div>
    );
  }
}

export default App;
