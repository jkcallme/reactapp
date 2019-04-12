var initialState = [];
function Carousel(state=initialState,action){
    switch(action.type){
        case 'GETCAROUSEL': 
        return [...action.payload];
        default: 
        return state;
    }
}

export default Carousel;