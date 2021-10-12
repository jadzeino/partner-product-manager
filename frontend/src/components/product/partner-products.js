import React, {useContext, useEffect} from "react";
import {ProductHeading} from "./product-heading";
import {ProductList} from "./product-list";
import {useParams} from "react-router-dom";
import {ProductContext} from "../../context/product-state";
import axiosInstance from "../../helpers/axios-instance";
const fetchPartnerProductList = async (listProducts,partner)=>{
    axiosInstance()
        .get(`/${partner}/products/`)
        .then((res) => {
            const products = res.data.products
            console.log("fetchPartnerProductList products   ",products)
            const ready = products.map((product,index)=>{
                return {id:product.productId,name:product.name,title:product.title,url:product.url,description:product.description,partnerName:product.partnername}
            })
            listProducts(ready)
        })
        .catch((err) => {
            console.log("err ",err)
            /*dispatch({
                type: ADD_REMOVE_STAR_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR,
            });*/
        });

}
export const PartnerProducts = ()=>{
    let { partner } = useParams();
    const { products ,removeProduct,listProducts} =useContext(ProductContext)
    useEffect(()=>{
        async function fetchData(){
            const products = await fetchPartnerProductList(listProducts,partner)
        }
        fetchData()

    },[])
    console.log("ProductList >>>  ",products)
    console.log("partnerName   ",partner)
    //welcome {partner Name}
    //filter or search, product name,title or desc
    //create product button
    //product list
    ////product card
    ////////edit/delete
    return(<main>
        <ProductHeading partnerName={partner}/>
        <ProductList products={products}/>

    </main>)

}