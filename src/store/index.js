import {createStore,combineReducers} from "redux"
import changefindGetRecommend from "./reducers/changefindGetRecommend"

var reducer=combineReducers({
	findGetRecommend:changefindGetRecommend
})
const store =createStore(reducer)
export default store