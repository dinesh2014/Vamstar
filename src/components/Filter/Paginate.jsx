import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import FilterStyle from '../../styles/Filter.module.css'
  
 function Paginate() {
  return (
    <div className={FilterStyle.paginate} >
      <Pagination count={10} />
    </div>
  );
}

export default Paginate;