import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./Jumbotron.css";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import RecipeOfDay from "./RecipeOfDay";



const JumBotron = () => {

    return (
        <Jumbotron className="hero" 
        fluid >
            <h1>WHAT ARE WE COOKING?</h1>
            <div>
                <RecipeOfDay />
            </div>
        </Jumbotron>
    )
}

export default JumBotron;


// className='Banner'