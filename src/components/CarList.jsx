import React from 'react';
import cardStyle from '../styles/Card.module.css'

function CarList(props){

    return(
        <div className={cardStyle.card} >
            <p className={cardStyle.cardName}>{props.name}</p>
            <img className={cardStyle.cardImg} src={props.photo} alt={props.name}/>
            <p className={cardStyle.cardDetail}><b>Miles Per Gallon:</b> &nbsp;{props.mileage}</p>
            <p className={cardStyle.cardDetail}><b>Cylinders:</b>&nbsp;{props.cylinder}</p>
            <p className={cardStyle.cardDetail}><b>Displacement:</b>&nbsp;{props.displacement}</p>
            <p className={cardStyle.cardDetail}><b>Horsepower:</b>&nbsp;{props.horsepower}</p>
            <p className={cardStyle.cardDetail}><b>Weight (lbs):</b>&nbsp;{props.weight}</p>
            <p className={cardStyle.cardDetail}><b>Acceleration:</b>&nbsp;{props.acceleration}</p>
            <p className={cardStyle.cardDetail}><b>Year:</b>&nbsp;{props.year}</p>
            <p className={cardStyle.cardDetail}><b>Origin:</b>&nbsp;{props.origin}</p>
        </div>
    )
}

export default CarList ;