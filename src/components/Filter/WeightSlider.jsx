import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import FilterStyle from '../../styles/Filter.module.css'

function WeightSlider(){
     const [range,setRange] = useState()
     const dispatch = useDispatch()

    function getValue(event){
        let range= event.target.value
            setRange(range)
            dispatch({"type":"SLIDER","payload":range})       
    }
    return(
        <div className={FilterStyle.slider}>
           <p className={FilterStyle.heading}><b>Weight</b></p>
           <input type="range" onChange={getValue} id={FilterStyle.dropDown} className={"form-control-range" } min="1500" max="6000"  />
           {range >1500 &&<p className={FilterStyle.range}>{range}</p>}
        </div>
    )
}

export default WeightSlider;