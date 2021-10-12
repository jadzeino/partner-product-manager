import React,{useContext,useState} from "react";
import {Link,useHistory} from "react-router-dom";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {GlobalContext} from "../context/global-state";
import axios from "axios";

export const AddPartner = ()=>{
    const [name,setName] = useState()
    const [website,setWebsite] = useState()
    const {addPartner,baseURL} = useContext(GlobalContext)
    const history = useHistory()
    const onChangeName = (e)=>{
        setName(e.target.value)
    }
    const onChangeWebsite = (e)=>{
        setWebsite(e.target.value)
    }
    console.log("baseURL  ",baseURL)
    const onSubmit = (e)=>{
        e.preventDefault()
        /*var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "partnername": "nokia",
            "website": "https://www.nokia.de/"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        //fetch("https://3lw8cx086i.execute-api.us-east-1.amazonaws.com/dev/partners", requestOptions)
        fetch("https://6772iyxuqf.execute-api.us-east-1.amazonaws.com/staging/partners", requestOptions)
        //fetch("https://6772iyxuqf.execute-api.us-east-1.amazonaws.com/staging/partners", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));*/

        /*var axios = require('axios');
        var data = JSON.stringify({
            "partnername": "nokia",
            "website": "https://www.nokia.de/"
        });

        var config = {
            method: 'post',
            url: 'https://3lw8cx086i.execute-api.us-east-1.amazonaws.com/dev/partners',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });*/

        const data = JSON.stringify({
            "partnername": name,
            "website": website
        });
        const config = {
            method: 'post',
            url: baseURL,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                console.log(response);
                if(response.status===200){
                    const {partnername,website} = response.data.partner
                    const newPartner = {
                        id:4,name:partnername,website:website
                    }
                    addPartner(newPartner)
                    history.push('/')
                }
            })
            .catch(function (error) {
                console.log(error);
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
        /*const newPartner = {
            id:4,name:name,website:website
        }
        addPartner(newPartner)
        history.push('/')*/
    }
    return (<Form onSubmit={onSubmit} style={{maxWidth:"30rem",margin:"4rem auto"}}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter Name" required onChange={onChangeName}></Input>
            <Label>Website</Label>
            <Input type="text" placeholder="Enter Website" required onChange={onChangeWebsite}></Input>
        </FormGroup>
        <div className="m-1">
            <Button type="submit" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </div>

    </Form>)
}