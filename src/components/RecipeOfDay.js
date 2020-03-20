import React from "react";
import Card from 'react-bootstrap/Card';
import './RecipeOfDay.css';

const RecipeOfDay = props => {

 return (
<Card 
    style={{ width: '26rem' }}
    className="card">
  <Card.Body >
    <Card.Title 
        id="cardTitle">
        Recipe of the day
    </Card.Title>
    <Card.Subtitle 
        id="recipeName">
    hello
    </Card.Subtitle>
    <Card.Text 
        id="recipeDescription">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link >
        Another Link
    </Card.Link>
  </Card.Body>
</Card>
 );
};

export default RecipeOfDay;

