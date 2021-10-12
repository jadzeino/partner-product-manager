import React, {createContext, useEffect, useReducer} from "react";
import appReducer from './app-reducer'
import axios from "axios";

//base url
//const BASE_URL = "https://6772iyxuqf.execute-api.us-east-1.amazonaws.com/staging/partners"
const BASE_URL = "http://localhost:3000/dev/partners"

//initial state
const initialState = {
    partners:[
        /*{id:1,name:"Partner 1",website:"www.google.com"},
        {id:2,name:"Partner 2",website:"www.google.com"},
        {id:3,name:"Partner 3",website:"www.google.com"}*/
    ]
}
//create Context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(appReducer,initialState);
    //Actions
    const removePartner = (partnerName)=>{
        dispatch({
                type:"REMOVE_PARTNER",
                payload: partnerName
                 })
    }
    const addPartner = (partner)=>{
        dispatch({
            type:"ADD_PARTNER",
            payload:partner
        })
    }
    const editPartner = (partner)=>{
        dispatch({
            type:"EDIT_PARTNER",
            payload:partner
        })
    }
    const listPartners = (partners)=>{
        dispatch({
            type:"LIST_PARTNERS",
            payload:partners
        })
    }
    return (
        <GlobalContext.Provider value={{
            partners:state.partners,
            removePartner:removePartner,
            addPartner:addPartner,
            editPartner:editPartner,
            listPartners:listPartners,
            baseURL:BASE_URL

        }}>
            {children}
        </GlobalContext.Provider>
    )
}
