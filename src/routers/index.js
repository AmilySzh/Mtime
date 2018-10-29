import React from "react"
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux"
import store from "../store"
import App from "../App"

import Index from "../components/index"
import Movie from "../components/movie"

import Buyticket from "../components/buyticket"

import Find from "../components/find"
import News from "../components/find/news"
import Trailer from "../components/find/trailer"
import Toplis from "../components/find/toplist"
import Review from "../components/find/review"

import Market from "../components/market"
import Mallindex from "../components/market/mallindex"
import List from "../components/market/list"
import Item from "../components/market/item"
var router =<Provider store={store}>
				<Router>
					<App>
						<Switch>
						{/*首页路由*/}
							<Route path="/index" component={Index}></Route>
							<Route path="/movie" component={Movie}></Route>
						{/*购票页路由*/}  
							<Route path="/buyticket" component={Buyticket}></Route>
						{/*发现页路由*/}
							<Route path="/find" render={()=><Find>
								<Switch>
									<Route path="/news" component={News}></Route>
									<Route path="/trailer" component={Trailer}></Route>
									<Route path="/toplist" component={Toplis}></Route>
									<Route path="/review" component={Review}></Route>
									<Redirect from="/find" to="/find/news"></Redirect>
								</Switch>
							</Find>}></Route>
						{/*商城页路由*/}
							<Route path="/market" render={()=><Market>
								<Switch>
									<Route path="/index" component={Mallindex}></Route>
									<Route path="/list" component={List}></Route>
									<Route path="/item" component={Item}></Route>
									<Redirect from="/market" to="/market/index"></Redirect>
								</Switch>
							</Market>}></Route>

							<Redirect from="*" to="/index"></Redirect>
						</Switch>
					</App>
				</Router>
</Provider>
export default router