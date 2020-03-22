import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './DishDetails.css'

const DishDetails = props => {

  const [recipe, setRecipe] = useState({ meals: [] })
  const getRecipe = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      );
      setRecipe({ meals: data.meals[0] });
    };

    useEffect(() => {
      getRecipe();
    }, []); 
    
  return (
    <div className="details">
      <div id='line-nav'>
      </div>   
      <div id='left-details'>
        <h4 id='title-details'>{recipe.meals.strMeal}</h4>
        <h5>PREPARATION</h5>
        <p id='recipe-text'>{recipe.meals.strInstructions}</p>
      </div>
      <div id='right-details'>
        <img 
          alt={recipe.meals.strMeal} 
          id='picture-dish'
          src={recipe.meals.strMealThumb} 
        />
      </div>
    </div>
  )
}

export default DishDetails;

