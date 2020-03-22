import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import "./RandomRecipe.css";



const RandomRecipe = () => {
  
  const [ random, setRandom ] = useState({ meals: []})
  const getRandom = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      setRandom({ meals: data.meals[0] });
    };

    useEffect(() => {
      getRandom();
    }, []);
    console.log(random);
  return (


    <div className="details">
      <div id='line-nav'>
      </div>   
      <div id='left-details'>
        <h4 id='title-details'>{random.meals.strMeal}</h4>
        <h5>PREPARATION</h5>
        <p id='recipe-text'>{random.meals.strInstructions}</p>
      </div>
      <div id='right-details'>
        <img 
          alt={random.meals.strMeal} 
          id='picture-dish'
          src={random.meals.strMealThumb}
        />
      </div>
    </div>
  )
}
export default RandomRecipe;

