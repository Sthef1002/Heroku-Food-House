import React from "react";
import { Link } from 'react-router-dom';
import './MainDishCard.css'

const MainDishCard = props => {

return (

  <Link
    to={{
    pathname: `${props.meal.idMeal}`,
    }}
  >
   <div className="dish-card">
    <img 
      alt={props.meal.strMeal} 
      id="card-img-main" 
      src={props.meal.strMealThumb} 
    />
      <div className="card-body">
        <h5 className="card-title-page">
          {props.meal.strMeal}
        </h5>
      </div>
    </div>
  </Link>
 );
};

export default MainDishCard;

