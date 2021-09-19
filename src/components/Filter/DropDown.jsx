import React from 'react';
import { useDispatch } from 'react-redux';
import FilterStyle from '../../styles/Filter.module.css'

function Dropdown(){
  const dispatch = useDispatch()
  function cylinderCheck(event){
     let value = event.target.value
     console.log(value)
     dispatch({"type":"DROPDOWN" , "payload":value})
  }
    return(
        <div className={FilterStyle.Dropdown}>
            <p className={FilterStyle.heading}><b>Cylinder</b> </p>
            <select onChange={cylinderCheck} id={FilterStyle.customSelect} className="custom-select">
                <option default>0</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                </select>
        </div> 
    )
}

export default Dropdown;