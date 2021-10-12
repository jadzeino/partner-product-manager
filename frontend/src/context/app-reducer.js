export default (state,action)=>{
    console.log("state  ",state)
    switch (action.type){
        case "REMOVE_PARTNER":
            return {
                partners:state.partners.filter(partner=>{
                   return partner.name !== action.payload
                })
            }
        case "ADD_PARTNER":
            return {
                partners:[action.payload,...state.partners]
            }
        case "LIST_PARTNERS":
            console.log("action.payload  ",action.payload)
            if(action.payload){
                return {
                    partners:action.payload
                }
            }else{
                return state
            }

        case "EDIT_PARTNER":
            const updatedPartner = action.payload
            const updatedPartners =  state.partners.map(partner => {
                if(partner.name === updatedPartner.oldName){
                    delete updatedPartner.oldName
                    return updatedPartner
                }
                return partner
            })
            return {
                ...state,
                partners:updatedPartners
            }
        default:
            return state
    }
}