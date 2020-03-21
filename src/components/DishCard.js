import React from "react";
import './DishCard.css'
import { Link } from 'react-router-dom';

const DishCard = props => {

return (

  <Link
    to={{
    pathname: `${props.meal.idMeal}`,
    }}
  >
   <div className="dish-card">
    <img 
      alt={props.meal.strMeal} 
      className="card-img-top" 
      src={props.meal.strMealThumb} 
    />
      <div className="card-body-main">
        <h5 className="card-title-main">
          {props.meal.strMeal}
        </h5>
      </div>
    </div>
  </Link>
 );
};

export default DishCard;

