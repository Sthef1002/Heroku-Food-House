import React from "react";
import Card from 'react-bootstrap/Card';
import './About.css'

const About = () => {
    return (

        <Card id='main-about'>
            <Card.Img className='about-us' variant="top" />
            <Card.Body className='about-content'>
                <Card.Title>
                    <h4>Our Chefs</h4>
                </Card.Title>
                <Card.Text>
                    <div>
                        <h5>
                            GIADA FLAY 
                        </h5>
                        <p className='content-text'>
                        I’m into very colorful food. Obviously lots of flavor, but I think we eat with our eyes first, so it has to look great. The presentation has to be great. 
                        </p>
                    </div>
                    <div>
                        <h5>
                            BOBBY RAMSAY 
                        </h5>
                        <p className='content-text'>
                        For me, it’s all about moderation. I don’t kick things out of my diet, like carbs. But I’m not going to eat fast food.
                        </p>
                    </div>
                    <div>
                        <h5>
                            AMANDA DI MAGGIO 
                        </h5>
                        <p className='content-text'>
                        I’m probably a bit romantic about it, but I think we humans miss having contact with fire. We need it.
                        </p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default About;