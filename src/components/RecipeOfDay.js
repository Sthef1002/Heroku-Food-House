import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RecipeOfDay = props => {

 return (
  <Link>
<Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Recipe of the day</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>


{/*     
   <div className="Dishcard">
     <img className="card-img-top" src={props.meal.strMealThumb} alt={props.meal.strMeal} />
   </div> */}
</Link>
 );
};

export default RecipeOfDay;

