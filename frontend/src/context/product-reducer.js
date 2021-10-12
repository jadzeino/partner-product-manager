export default (state,action)=>{
    console.log("state  ",state)
    switch (action.type){
        case "REMOVE_PRODUCT":
            return {
                products:state.products.filter(product=>{
                    return product.id !== action.payload
                })
            }
        case "ADD_PRODUCT":
            return {
                products:[action.payload,...state.products]
            }
        case "LIST_PRODUCTS":
            console.log("action.payload  ",action.payload)
            if(action.payload){
                return {
                    products:action.payload
                }
            }else{
                return state
            }
        case "EDIT_PRODUCT":
            const updatedProduct = action.payload
            const updatedProducts =  state.products.map(product => {
                if(product.id === updatedProduct.id){
                    return updatedProduct
                }
                return product
            })
            return {
                ...state,
                products:updatedProducts
            }
        default:
            return state
    }
}