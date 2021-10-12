import React, {createContext, useReducer} from "react";
import productReducer from './product-reducer'


const BASE_URL = "http://localhost:3000/dev/partners"

//initial state
const initialState = {
    products:[
        /*{id:1,name:"product name A",title:"Product Title A",url:"https://picsum.photos/250/150" ,description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {id:2,name:"product name B",title:"Product Title B",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {id:3,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {id:4,name:"product name D",title:"Product Title D",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {id:5,name:"product name E",title:"Product Title E",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {id:6,name:"product name F",title:"Product Title F",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."}*/
    ]
}
//create Context
export const ProductContext = createContext(initialState)

//provider component
export const ProductProvider = ({children})=>{
    const [state,dispatch] = useReducer(productReducer,initialState);
    //Actions
    const removeProduct = (productId)=>{//we need partnername and productId
        dispatch({
            type:"REMOVE_PRODUCT",
            payload: productId
        })
    }
    const addProduct = (product)=>{
        dispatch({
            type:"ADD_PRODUCT",
            payload:product
        })
    }
    const editProduct = (partnerName,product)=>{
        dispatch({
            type:"EDIT_PRODUCT",
            payload:{partnerName,product}
        })
    }
    const listProducts = (products)=>{
        dispatch({
            type:"LIST_PRODUCTS",
            payload:products
        })
    }
    return (
        <ProductContext.Provider value={{
            products:state.products,
            removeProduct:removeProduct,
            addProduct:addProduct,
            editProduct:editProduct,
            listProducts:listProducts,
            baseURL:BASE_URL

        }}>
            {children}
        </ProductContext.Provider>
    )
}
