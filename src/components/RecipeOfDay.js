import React, { useState, useEffect, } from "react";
import Card from 'react-bootstrap/Card';
import './RecipeOfDay.css';
import { Link } from "react-router-dom";
import RandomRecipe from "./RandomRecipe.js";
import axios from 'axios';




const RecipeOfDay = props => {

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

<Link  
  to={{
      pathname: `idMeal`,
      }} >
  <Card 
      style={{ width: '26rem' }}
      className="card"
      >
    <Card.Body >
      <Card.Title
          id="cardTitle">
          Recipe of the day
      </Card.Title>
      <Card.Subtitle 
          // as={Link}
          // to="/random"
          id="recipeName">
            {random.meals.strMeal}
      </Card.Subtitle>
      <Card.Text 
          id="recipeDescription">
              {random.meals.strInstructions}
      </Card.Text>
    </Card.Body>
  </Card>
</Link>

 );
};

export default RecipeOfDay;

