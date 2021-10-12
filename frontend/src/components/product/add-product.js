import React, {useContext} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {ProductContext} from "../../context/product-state";
import axiosInstance from "../../helpers/axios-instance";
export const AddProduct = ()=>{
    let { partner } = useParams();
    const {addProduct} = useContext(ProductContext)
    const history = useHistory()
    const [state, setState] = React.useState({
        name: "",
        title: "",
        description: "",
        url: "",
    })

    const onChange = (evt)=>{
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });

    }
    const onSubmit = (e)=> {
        e.preventDefault()
        const data = JSON.stringify(state);
        axiosInstance()
            .post(`/${partner}/products`,data)
            .then((res) => {
                if(res.status===200){
                    const {partnername,url,name,title,description,productId} = res.data.product
                    const newProduct ={id:productId,name:name,title:title,url:url ,description: description,partnername:partnername}
                    addProduct(newProduct)
                    history.push(`/partner/${partner}/products`)
                }

            })
            .catch((err) => {
                console.log("err ",err)
            });

    }
    return (<Form style={{maxWidth:"30rem",margin:"4rem auto"}} onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" placeholder="Enter Name" required onChange={onChange}></Input>
            <Label>Title</Label>
            <Input type="text" name="title" placeholder="Enter Title" required onChange={onChange}></Input>
            <Label>Description</Label>
            <Input type="text" name="description" placeholder="Enter Description" required onChange={onChange}></Input>
            <Label>Image URL</Label>
            <Input type="text" name="url" placeholder="Add Image URL" required onChange={onChange}></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to={`/partner/${partner}/products`} className="btn btn-danger ml-2">Cancel</Link>
    </Form>)
}