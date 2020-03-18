import React, { useState, useEffect,  } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import DishCard from './components/DishCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RandomRecipe from './components/RandomRecipe';
import About from './components/About';
import DishDetails from './components/DishDetails'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const FoodHouse = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    setData({ hits: result.data.meals });
  };
 

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(data);
 
  return (
    <Router>
      <div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/" >FoodHouse</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/" >Recipes</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/random">Recipe of the Day</Nav.Link>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
    <SearchForm as={FormControl} setSearch={setSearch} placeholder="Search" type="text" initialPlaceholder={search} className="mr-sm-2"/>
      {/* <Button variant="outline-info">Search</Button> */}
    </Form>
  </Navbar>
        <Switch>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/random">
           <RandomRecipe />
         </Route>
         <Route path="/:id" component={DishDetails} />
         <Route exact path="/">

         <div className="container">
              {data.hits && data.hits.length
                ? data.hits.map(meal =>
                  <DishCard key={meal.idMeal} meal={meal}>
                  </DishCard>)
                : "Nothing found :-/"}
            </div>
         </Route>
       </Switch>
      </div>
    </Router>
  );
 
}

export default FoodHouse;