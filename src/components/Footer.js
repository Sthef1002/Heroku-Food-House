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
  <p
    as={Link} 
    id="footer-fh-logo" 
    to="/" >
    FoodHouse
    </p>
    <Nav 
        className="footerNav">
        <Nav.Link 
            as={Link} 
            to="/" >
            <p>Recipes</p>
        </Nav.Link>
        <Nav.Link 
            as={Link} 
            to="/about">
            <p>About</p>
        </Nav.Link>
        <Nav.Link 
            as={Link} 
            to="/random">
            <p>Recipe of the Day</p>
        </Nav.Link>
    </Nav>
</Jumbotron>

    )
}


export default Footer;