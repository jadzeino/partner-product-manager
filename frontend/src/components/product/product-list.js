import React from "react";
import {Product} from "./product";
const dummyList = [
    {id:1,name:"product name A",title:"Product Title A",url:"https://picsum.photos/250/150" ,description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:2,name:"product name B",title:"Product Title B",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:3,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:4,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:5,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:6,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    /*{id:7,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:8,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:9,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:10,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id:11,name:"product name C",title:"Product Title C",url:"https://picsum.photos/250/150",description: "Some quick example text to build on the card title and make up the bulk of the card's content."},*/
]
const productContainerStyle={
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
alignContent: "center",
justifyContent: "center",
alignItems: "center"
}
export const ProductList = ({products})=>{
    console.log("products    products  ",products)
    if(!products || products.length<1) return (<h4>No Products Found For This Partner</h4>)
    return (<div style={productContainerStyle}>
        {products.map(product => {
            return <Product key={product.id} {...product}/>
    })}
    </div>)
}