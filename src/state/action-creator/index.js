export const add_product = (product) => {
    return (dispatch)=>{
        dispatch({
            type:"add_product",
            payload: product
        })
    }
} 
export const remove_product = (idx) => {
    console.log("action triggered remove_product");
    return (dispatch)=>{
        dispatch({
            type:"remove_product",
            payload: idx
        })
    }
} 