import React, { useState,Fragment } from 'react'
import Header from "./components/Header"
import FormFilter from "./components/Filter/FormFilter"
import CarList from "./components/CarList"
import Pagination from '@material-ui/lab/Pagination';
import FilterStyle from './styles/Filter.module.css'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import usePagination from "./components/Filter/Utils";

function App() {
  let carData=useSelector((state)=>state.cars)
  const origin=useSelector((state)=>state.origin)
  const cylinder=useSelector((state)=>state.cylinder)
  const weight=useSelector((state)=>state.weight)

  carData = carData.filter((items)=>{
    return ((origin.includes(items.Origin)) && 
            (cylinder.includes(items.Cylinders)) &&
            (items.Weight_in_lbs < weight))
})
  
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(carData.length / PER_PAGE);
  const _DATA = usePagination(carData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  
  

  return(
    <Fragment>
      <Header/>
      {
        _DATA.currentData().map((items,index)=>{
            return(
              <CarList key={index}
                       name={items.Name} 
                       photo={items.Photo}
                       mileage={items.Miles_per_Gallon}
                       cylinder={items.Cylinders}
                       displacement={items.Displacement}
                       horsepower={items.Horsepower}
                       weight={items.Weight_in_lbs}
                       acceleration={items.Acceleration}
                       year={items.Year}
                       origin={items.Origin}
                       />
            )
        })
      }
   <FormFilter />
   <div className={FilterStyle.paginate} >
   <Pagination
        count={count}
        size="small"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
   <Footer />
    </Fragment>
    )
}

export default App;
