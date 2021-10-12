import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import axiosInstance from "../../helpers/axios-instance";
import {ProductContext} from "../../context/product-state";
export const Product = ({partnerName,id,name,title,description,url})=>{
    console.log("MMMMMM    ",id)
    const { removeProduct} =useContext(ProductContext)
    return (<>
        <div key ={id} className="card" style={{width: "15rem" ,margin:"10px" , minWidth:"220px"}}>
            <img className="card-img-top" src={url} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link className="btn btn-warning m-1" to={`/edit-product/${partnerName}/${id}`}>Edit</Link>
                    <Button color="danger" onClick={(e)=>{
                        e.preventDefault()
                        //const data = JSON.stringify({url,name,title,description});
                        axiosInstance()
                            //.delete(`/${partnerName}/products/${id}`,data)
                            .delete(`/${partnerName}/products/${id}`)
                            .then(function (response) {
                                console.log("response  ",response);
                                if(response.status===200){
                                    removeProduct(id)
                                }
                            })
                            .catch(function (error) {
                                console.log("error  ",error);
                                if (error.response) {
                                    // The request was made and the server responded with a status code
                                    // that falls out of the range of 2xx
                                    console.log(error.response.data);
                                    console.log(error.response.status);
                                    console.log(error.response.headers);
                                } else if (error.request) {
                                    // The request was made but no response was received
                                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                    // http.ClientRequest in node.js
                                    console.log(error.request);
                                } else {
                                    // Something happened in setting up the request that triggered an Error
                                    console.log('Error', error.message);
                                }
                                console.log(error);
                            });
                    }}>Delete</Button>
                </div>
        </div>
    </>)
}
