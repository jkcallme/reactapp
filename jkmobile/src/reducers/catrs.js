var initialState = [];
var _ =require('lodash')
function carts(state=initialState,action){
    switch(action.type){
            case "ADDTOCARTS":
            // console.log(action.payload)
                var obj =delete action.payload.addToCart;
                var pos =_.findIndex(state,{id:action.payload.id});
                if(pos!=-1){
                    state[pos].quantity =state[pos].quantity+1;
                    console.log([...state])
                    return [...state];
                }else{
                    action.payload.quantity=1;

                    console.log([...state,action.payload],'==1')
                    return [...state,action.payload];
                };
            case "CLEARTOCARTS":
            var tempArray1 = [];//临时数组1
            var tempArray2 = [];//临时数组2

            for(var i=0;i<action.payload.length;i++){
                tempArray1[action.payload[i].id]=true;
            }

            for(var i=0;i<state.length;i++){
                if(!tempArray1[state[i].id]){
                    tempArray2.push(state[i]);
                }
            }
            return[...tempArray2];
            default:
                return state;
    }
}

export default carts;