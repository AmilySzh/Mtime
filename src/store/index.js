import {createStore,combineReducers,applyMiddleware} from "redux"
import smartReducer from './reducers/smartReducer'

import reduxThunk from 'redux-thunk'

var reducer=combineReducers({
	smartReducer
})
const store =createStore(reducer,applyMiddleware(reduxThunk))
export default store