import {createStore} from 'redux'
import {carData} from "../data/Data"

let initData = {
    "cars" :carData,
    "origin":['USA','Europe','Japan'],
    "cylinder":[1,2,3,4,5,6,7,8,9,10,11,12],
    "weight":6000
}

function reducer(state=initData,action){
    if(action.type === "SEARCH"){  
        if(action.payload.srchTerm){
            return {...state,"cars":action.payload.data}
        }else{
            return {...state,"cars":carData} 
        }
    }else if(action.type === "CHECKBOX"){
         if(action.payload.myFilter){
            return {...state,"origin":action.payload.box}
         }else{
            return {...state,"origin":initData.origin}
         }        
    }else if(action.type === "DROPDOWN"){
        if(action.payload >0){
            return {...state,"cylinder":action.payload}
        }else{
            return {...state,"cylinder":initData.cylinder}
        }         
    }else if(action.type === "SLIDER"){
           if(action.payload > 1500){
            return {...state,"weight":action.payload} 
           }else{
            return {...state,"weight":initData.weight} 
           }                
    }else{
        return state
    }
}




const store = createStore(reducer);

export default store;