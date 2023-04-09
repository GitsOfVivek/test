// add cases for 2 action types

// 1 case 'ADD_TO_CART'

// 2 case 'REMOVE_FROM_CART'

const initialState={

    items:[],

    totalItems:0,

    totalCost:0,

};

const cartReducer = (state=initialState, action) => {

switch(action.type){

    case 'ADD_TO_CART':

    return {

        ...state,

        items:[...state.items,action.payload],

        totalItems:state.totalItems+1,

        totalCost:state.totalCost+action.payload.price,

    };

    case 'REMOVE_FROM_CART':

    const itemRemove=state.items.find((item)=>item.id===action.payload);

    return {

        ...state,

        items:state.items.filter((item)=>item.id !==action.payload),

        totalItems:state.totalItems-1,

        totalCost:state.totalCost-itemRemove.price,

    };

    default:

    return state;

}    

};

  

  export default cartReducer;
