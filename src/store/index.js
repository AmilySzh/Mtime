import {createStore,combineReducers,applyMiddleware} from "redux"
import smartReducer from './reducers/smartReducer'

import reduxThunk from 'redux-thunk'
import changefindGetRecommen from "./reducers/changefindGetRecommend"

var reducer=combineReducers({
	smartReducer})

var reducer=combineReducers({
	findGetRecommend:changefindGetRecommen
})
const store =createStore(reducer,applyMiddleware(reduxThunk))
export default store