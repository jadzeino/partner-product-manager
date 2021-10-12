import React, {useContext, useEffect} from "react";
import {Link,useRouteMatch} from "react-router-dom";
import {ListGroup,ListGroupItem,Button} from 'reactstrap'
import {GlobalContext} from "../context/global-state";
import axios from "axios";
import axiosInstance from "../helpers/axios-instance"

const fetchPartnerList = async(listPartners)=>{
    axiosInstance()
        .get(`/`)
        .then((res) => {
            const partners = res.data.partners
            console.log("fetchPartnerList partners   ",partners)
            const ready = partners.map((partner,index)=>{
                return {id:index,name:partner.partnername,website:partner.website}
            })
            listPartners(ready)
        })
        .catch((err) => {
            console.log("err ",err)
            /*dispatch({
                type: ADD_REMOVE_STAR_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR,
            });*/
        });

}

export const PartnerList = ()=>{
    const { partners ,removePartner,baseURL,listPartners} =useContext(GlobalContext)
    useEffect(()=>{
        async function fetchData(){
            const partners = await fetchPartnerList(listPartners)

        }
        fetchData()

    },[])
    console.log("PartnerList partners  ",partners)
    if(!partners || partners.length<1) return (<h4>No Partners Found</h4>)
    return (<ListGroup>
        {
           partners.map(partner =>{
               return (<ListGroupItem key={partner.id} className="d-flex flex-row align-items-center">
                   <strong>{partner.name}</strong>
                   <div className="m-2">{partner.website}</div>
                   <div className="m-auto">
                       <Link className="btn btn-primary m-1" to={`/partner/${partner.name}/products/`}>Manage Products</Link>
                       <Link className="btn btn-warning m-1" to={`/edit-partner/${partner.name}`}>Edit</Link>
                       <Button color="danger" onClick={(e)=>{
                           e.preventDefault()
                           const config = {
                               method: 'delete',
                               url: `${baseURL}/${partner.name}`,
                               headers: {
                                   'Content-Type': 'application/json'
                               }
                           };
                           axios(config)
                               .then(function (response) {
                                   console.log("response  ",response);
                                   if(response.status===200){
                                       removePartner(partner.name)
                                       /*const {partnername,website} = response.data.partner
                                       const newPartner = {
                                           id:4,name:partnername,website:website
                                       }
                                       editPartner(newPartner)
                                       history.push("/")*/
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



                           //removePartner(partner.name)
                       }}>Delete</Button>
                   </div>
               </ListGroupItem>)
           })
        }


    </ListGroup>)
}