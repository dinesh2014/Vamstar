import React from 'react'
import Checkbox from './Checkbox'
import Dropdown from './DropDown'
import WeightSlider from './WeightSlider'
import FilterStyle from '../../styles/Filter.module.css'

function FormFilter(){
    return(
        <div className={FilterStyle.country} >
        <Checkbox />
        <Dropdown />
        <WeightSlider />
        </div>
    )
}

export default FormFilter;