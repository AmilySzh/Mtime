const smartRouder = (prevState=[],action={})=>{
	let type = action.type
	switch(type){
		case 'changeMarket':
			return action.payload
		default:
			return prevState
	}
}

export default smartRouder