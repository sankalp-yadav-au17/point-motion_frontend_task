export const add_product = (product) => {
    return (dispatch)=>{
        dispatch({
            type:"add_product",
            payload: product
        })
    }
} 