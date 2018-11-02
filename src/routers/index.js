import React from "react"
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux"
import store from "../store"
import App from "../App"

import Index from "../components/index"
import Search from "../components/index/Search.js"
import Movie from "../components/movie"

import Buyticket from "../components/buyticket"
import Time from "../components/time"

import Find from "../components/find"
import News from "../components/find/news"
import Trailer from "../components/find/trailer"
import Toplis from "../components/find/toplist"
import Review from "../components/find/review"
import Finddetail from "../components/finddetail"
import Newsdetail from "../components/finddetail/newsdetail"
import Toplistdetail from "../components/finddetail/toplistdetail"
import Toplistcontent from "../components/finddetail/toplistdetail/toplistcontent"
import Trailerdet from "../components/finddetail/trailerdetail"

import Market from "../components/market"
import Mallindex from "../components/market/mallindex"
import List from "../components/market/list"
import Item from "../components/market/item"

import Searchinput from "../components/market/search"



var router =<Provider store={store}>
				<Router>
					<App>
						<Switch>
						{/*首页路由*/}
							<Route path="/index" component={Index}></Route>
							<Route path="/search" component={Search}></Route>
							<Route path="/movie" component={Movie}></Route>
						{/*购票页路由*/}  
							<Route path="/buyticket" component={Buyticket}></Route>
						{/*购票页店面跳转*/}
							<Route path="/time/:dora" component={Time}></Route>
						{/*发现页路由*/}
							<Route path="/find" render={()=><Find>
								<Switch>
									<Route path="/find/news" component={News}></Route>
									<Route path="/find/trailer" component={Trailer}></Route>
									<Route path="/find/toplist" component={Toplis}></Route>
									<Route path="/find/review" component={Review}></Route>
									<Redirect from="/find" to="/find/news"></Redirect>
								</Switch>
							</Find>}></Route> 
							<Route path="/finddetail" render={(props)=><Finddetail {...props}>
								<Switch>
									<Route path="/finddetail/news/:szh" component={Newsdetail}></Route>
									<Route path="/finddetail/toplist/:szh" component={Toplistdetail}></Route>
									<Route path="/finddetail/detail/:szh" component={Toplistcontent}></Route>
									<Route path="/finddetail/trailer/:szh" component={Trailerdet}></Route>
								</Switch>
							</Finddetail>}></Route>
						{/*商城页路由*/}
							<Route path="/market"  render={(props)=>
								<Market {...props}>
									<Switch>
										<Route path="/market/index" component={Mallindex}></Route>
										<Route path="/market/list/:info" component={List}></Route>
										<Route path="/market/item/:id" component={Item}></Route>
										<Route path="/market/search" component={Searchinput}></Route>
										<Redirect from="/market" to="/market/index"></Redirect>
									</Switch>
								</Market>}>
							</Route>

							<Redirect from="*" to="/index"></Redirect>
						</Switch>
					</App>
				</Router>
</Provider>
export default router