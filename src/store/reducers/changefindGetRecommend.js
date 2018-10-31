var changefindGetRecommend=(prevState={},action={})=>{
	var type=action.type;
	switch(type){
		case "changefindGetRecommend":
			return action.payload
		default:
			return prevState
	}
}
export default changefindGetRecommend