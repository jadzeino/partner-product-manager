import React,{useContext,useState,useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import {GlobalContext} from "../context/global-state";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import axios from "axios";
export const EditPartner = (props)=>{
    const {partners,editPartner,baseURL} = useContext(GlobalContext)
    const [selectedPartner,setSelectedPartner] = useState({
        id:'',
        name:'',
        oldName:''
    })
    const history = useHistory()
    const currentPartnerName = props.match.params.name
    console.log("currentPartnerName ",currentPartnerName)

    useEffect(()=>{
        const partnerName = currentPartnerName
        const selectedPartner = partners.find(partner=>partner.name === partnerName)
        selectedPartner.oldName = selectedPartner.name
        setSelectedPartner(selectedPartner)
    },[currentPartnerName,partners])

    const onChangeName = (e)=>{
        setSelectedPartner({...selectedPartner,[e.target.name]:e.target.value})
    }
    const onChangeWebsite = (e)=>{
        setSelectedPartner({...selectedPartner,[e.target.name]:e.target.value})
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log("....selectedPartner  ",selectedPartner)
        const {name,oldName,website} = selectedPartner
        const data = JSON.stringify({
            "partnername": name,
            "website": website
        });
        const config = {
            method: 'put',
            url: `${baseURL}/${oldName}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                console.log("response  ",response);
                if(response.status===200){
                    const {partnername,website} = response.data.partner
                    const newPartner = {
                        id:partnername,name:partnername,website:website
                    }
                    editPartner(newPartner)
                    history.push("/")
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




        /*editPartner(selectedPartner)
        history.push("/")*/
    }
    return (<Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" value={selectedPartner.name} name="name" placeholder="Enter Name" required onChange={onChangeName}></Input>
            <Input type="text" value={selectedPartner.website} name="website" placeholder="Enter Website" required onChange={onChangeWebsite}></Input>
        </FormGroup>
        <Button type="submit">Save</Button>
        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>)
}