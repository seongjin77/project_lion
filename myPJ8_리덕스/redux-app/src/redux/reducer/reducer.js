let initialState = {
    count : 0
}

function reducer(state=initialState,action){
    console.log('액션입니다',action);
    if(action.type === 'increment'){
        return {... state, count : state.count + 1}
    }
    else if(action.type === 'decrement'){
        return {...state, count : state.count - 1}
    }
    return {...state};
}

export default reducer;