import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'



const Footer = () => {

    return(

<Jumbotron id="footer">
  <h2
    as={Link} 
    id="footer-fh-logo" 
    to="/" >
    FoodHouse
    </h2>
    <Nav 
        className="footerNav">
        <Nav.Link 
            as={Link} 
            to="/" >
            <h2>Recipes</h2>
        </Nav.Link>
        <Nav.Link 
            as={Link} 
            to="/about">
            <h2>About</h2>
        </Nav.Link>
        <Nav.Link 
            as={Link} 
            to="/random">
            <h2>Recipe of the Day</h2>
        </Nav.Link>
    </Nav>
</Jumbotron>

    )
}


export default Footer;