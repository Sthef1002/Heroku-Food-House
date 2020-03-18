import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'

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

      console.log(recipe);
     
    return (
        <div>   <p>{recipe.meals.strMeal}</p>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.meals.strMealThumb} alt={recipe.meals.strMeal}  />
            <Card.Body>
                <Card.Title>{recipe.meals.strMeal}</Card.Title>
                <Card.Text>
                     {recipe.meals.strInstructions}
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
}

export default DishDetails;

