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
import Image from 'react-bootstrap/Image';
import Jumbotron from './components/Jumbotron';
import RecipeOfDay from './components/RecipeOfDay';
import Footer from './components/Footer';




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

// This section is the navigation bar  
    <Router>
      <div>
        <Navbar 
          className="Navigation">

          <Navbar.Brand 
            as={Link} 
            id="food-house-logo" 
            to="/" >
            FoodHouse
          </Navbar.Brand>
          <Nav 
            className="mr-auto font">
            <Nav.Link 
              as={Link} 
              to="/" >
              Recipes
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about">
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/random">
              Recipe of the Day
            </Nav.Link>
            </Nav>

{/* This is the navigation bar Search Form */}
          <Form inline>
            <div className="nightmare">
              <SearchForm 
                as={FormControl} 
                className="mr-sm-2 search-form"
                initialPlaceholder={search} 
                placeholder="Search" 
                setSearch={setSearch} 
                type="text" />
              <Button 
                className="search-button"
                variant="outline-info">
                Search
              </Button>
            </div>
          </Form>
        </Navbar>


{/* Navigation bar paths */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/random">
          <RandomRecipe />
        </Route>

        <Route path="/:id" component={DishDetails} />
        <Route exact path="/">
        
{/* Hero section of page */}
        <Jumbotron />
        <div>
          {/* <RecipeOfDay /> */}
        </div>

{/* Dishes carrousel section */}
        <div>
          <h2>
            RECIPES
          </h2>
        </div>
        <div className="container">
          {data.hits && data.hits.length
          ? data.hits.map(meal =>
            
            <DishCard 
              key={meal.idMeal} 
              meal={meal}>
            </DishCard>)
            : "Nothing found :-/"}    
        </div>

        </Route>
      </Switch>
      </div>
      
      <div>
        <Footer />  
      </div>
      
    </Router>

    

    
  );
}

export default FoodHouse;