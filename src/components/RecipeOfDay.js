import React from "react";
import Card from 'react-bootstrap/Card';
import './RecipeOfDay.css';
import { Link } from "react-router-dom";
import RandomRecipe from "./RandomRecipe.js";


const RecipeOfDay = props => {

 return (

<Card 
    style={{ width: '26rem' }}
    className="card">
  <Card.Body >
    <Card.Title 
        as={Link} 
        to="/random"
        id="cardTitle">
        Recipe of the day
    </Card.Title>
    <Card.Subtitle 
        id="recipeName">
            {/* <RandomRecipe /> */}
            Ma Po Tofu
    </Card.Subtitle>
    <Card.Text 
        id="recipeDescription">
            Put a deep roasting tin onto the bottom shelf of the oven, and make sure that there’s another shelf directly above it. Pull the roasting tin out on its shelf, fill two-thirds with boiling...
    </Card.Text>
  </Card.Body>
</Card>
 );
};

export default RecipeOfDay;

