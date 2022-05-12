const initialState = []

const  Product_reducer = (state=initialState,action)=>{
    if (action.type === "add_product"){
        return [...state,action.payload]
    }
    else if (action.type === "remove_product"){
        return state.splice(action.payload,1)
    }
    else{
        return state
    }
};

export default Product_reducer