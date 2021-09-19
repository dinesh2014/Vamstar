import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import headerStyle from '../styles/Header.module.css'
import {carData} from "../data/Data"

function Header(){
    let data = useSelector((state)=>state.cars)
    const dispatch = useDispatch()
    function search(event){
       let srchTerm = event.target.value;
       if(srchTerm){       
           data = carData.filter((items)=>{
           return (items.Name.includes(srchTerm)||items.Origin.includes(srchTerm))
        })
       }
       console.log("In search")
       dispatch({"type":"SEARCH", "payload":{data,srchTerm}})
    }

    return(
        <div className={headerStyle.header}>
            <div className={headerStyle.carLogo}>
                <i className="fa fa-car" />
                <p className={headerStyle.logoText}>VAMSTAR</p>
            </div>
            <div>
                <div className={headerStyle.searchLogo}>
                    <i className="fa fa-search"/>
                    <input type="text" onChange={search} className={headerStyle.searchBar} placeholder="Search"/>
                </div>        
            </div>   
        </div>
    )
}

export default Header;