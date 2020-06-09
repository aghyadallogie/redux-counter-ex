let initialState = { clicksX: 0, clicksY: 0 };

const reducer = (state = initialState, action) => {
    console.log(action);
    
    switch (action.type) {
        case 'INCREASEX':
            let newClicksX = state.clicksX + 1;            
            return { ...state, clicksX: newClicksX };
        case 'INCREASEY':
            let newClicksY = state.clicksY + 1;
            return { ...state, clicksY: newClicksY };
        default:
            return state
    }
}

export default reducer;