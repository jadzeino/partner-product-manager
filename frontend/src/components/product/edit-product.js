import React, {useContext, useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {ProductContext} from "../../context/product-state";

import axiosInstance from "../../helpers/axios-instance";
export const EditProduct = (props)=>{
    const {products,editProduct} = useContext(ProductContext)
    let { partner,id: currentProductId} = useParams();
    console.log("this is isiksisisisiiss ",partner)
    const [selectedProduct,setSelectedProduct] = useState({
        id:'',
        name:'',
        title:'',
        description:'',
        url:''
    })
    const history = useHistory()
    console.log("currentProductId ",currentProductId)

    useEffect(()=>{
        const productId = currentProductId
        const selectedProduct = products.find(partner=>partner.id === productId)
        //selectedPartner.oldName = selectedPartner.name
        setSelectedProduct(selectedProduct)
    },[currentProductId,products])


    const onChange = (evt)=>{
        const value = evt.target.value;
        setSelectedProduct({
            ...selectedProduct,
            [evt.target.name]: value
        });

    }
    console.log("....selectedProduct  ",selectedProduct)
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log("....selectedProduct  ",selectedProduct)

        const {id,name,title,description,url} = selectedProduct
        const data = JSON.stringify({url,name,title,description});

        axiosInstance()
            .put(`/${partner}/products/${id}`,data)
            .then(function (response) {
                console.log("response  ",response);
                if(response.status===200){
                    const {name,title,url,description,productId} = response.data.product
                    const newProduct = {
                        id:productId,name:name,title:title,description:description,url:url
                    }
                    editProduct(newProduct)
                    history.push(`/partner/${partner}/products`)
                }
            })
            .catch(function (error) {
                console.log("error  ",error);
            });
    }

    return (<Form style={{maxWidth:"30rem",margin:"4rem auto"}} onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" value={selectedProduct.name} name="name" placeholder="Enter Name" required onChange={onChange}></Input>
            <Label>Title</Label>
            <Input type="text" value={selectedProduct.title} name="title" placeholder="Enter Title" required onChange={onChange}></Input>
            <Label>Description</Label>
            <Input type="text" value={selectedProduct.description} name="description" placeholder="Enter Description" required onChange={onChange}></Input>
            <Label>Image URL</Label>
            <Input type="text" name="url" value={selectedProduct.url} placeholder="Add Image URL" required onChange={onChange}></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to={`/partner/${partner}/products`} className="btn btn-danger ml-2">Cancel</Link>
    </Form>)
}