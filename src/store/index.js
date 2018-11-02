<<<<<<< HEAD
import {createStore,combineReducers,applyMiddleware} from "redux"
import smartReducer from './reducers/smartReducer'

import reduxThunk from 'redux-thunk'

var reducer=combineReducers({
	smartReducer
=======
import {createStore,combineReducers} from "redux"
import changefindGetRecommend from "./reducers/changefindGetRecommend"

var reducer=combineReducers({
	findGetRecommend:changefindGetRecommend
>>>>>>> 21c83654e4f213532217a9a8d88fe4484151f1d1
})
const store =createStore(reducer,applyMiddleware(reduxThunk))
export default store