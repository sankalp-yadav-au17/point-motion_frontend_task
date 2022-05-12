const initialState = []

const  Product_reducer = (state=initialState,action)=>{
    if (action.type === "add_product"){
        return [...state,action.payload]
    }
    else{
        return state
    }
};

export default Product_reducer