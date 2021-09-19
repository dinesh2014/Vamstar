import React , {useState} from 'react'
import { useDispatch} from 'react-redux';
import FilterStyle from '../../styles/Filter.module.css'

function Checkbox(){
  const [checkbox , setCheckbox] = useState([])
  const dispatch = useDispatch()
  function checkData(event){
     let value = event.target.value
     if(event.target.checked){
      let box = [...checkbox,value]
      setCheckbox(box)
      dispatch({"type":"CHECKBOX","payload":{"myFilter":true,"box":[...box]}})
     }else{
       let box = checkbox.filter((item)=>item !== value)
       setCheckbox(box)
       dispatch({"type":"CHECKBOX","payload":{"myFilter":false,"box":[...box]}})
     }
  }
    return(
        <React.Fragment >   
            <p className={FilterStyle.heading}> <b>Origin</b></p>
                <label className={FilterStyle.countryCheck}>
                  <input type="checkbox" onClick={checkData} className={FilterStyle.Check} id="USA" name="USA" value="USA" />
                  &nbsp;USA
                </label>
                <label className={FilterStyle.countryCheck}>
                  <input type="checkbox" onClick={checkData} className={FilterStyle.Check} id="Europe" name="Europe" value="Europe" />
                  &nbsp;Europe
                </label>
                <label className={FilterStyle.countryCheck}>
                  <input type="checkbox" onClick={checkData} className={FilterStyle.Check} id="Japan" name="Japan" value="Japan" />
                  &nbsp;Japan
                </label>
        </React.Fragment>
    )
}

export default Checkbox;