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

        <div className="randomContainer">
        {/* <Card className="randomCard" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={random.meals.strMealThumb} alt={random.meals.strMeal}  />
        <Card.Body>
          <Card.Title>{random.meals.strMeal}</Card.Title>
          <Card.Text>
          {random.meals.strInstructions}
          </Card.Text>
        </Card.Body>
      </Card> */}
      <Card>
    <Card.Img variant="top" src={random.meals.strMealThumb} alt={random.meals.strMeal}  />
    <Card.Body>
    <Card.Title>{random.meals.strMeal}</Card.Title>
          <Card.Text>
          {random.meals.strInstructions}
          </Card.Text>
    </Card.Body>
  </Card>
      </div>
    )
}
export default RandomRecipe;

