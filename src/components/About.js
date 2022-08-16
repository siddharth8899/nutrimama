import React from 'react'
import '../css/About.css'; 
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='abt-us'> <Link style={{ textDecoration: 'none', color: '#21a0e3' }} to="/about">ABOUT US</Link></div>
            <div className='abt'>
                <div>Nutrimama provides affordable food wrapping solutions.</div>
                <div> We are the Leading manufactureres of Aluminium foil
                    and food wrapping paper.
                </div>
                <div>Nutrimama is an alternative to Plastic wrap and provides a nutritious way to wrap your food
                maintaining the freshness and keeping you healthy.</div>

                <div>We are manufacture greaseproof foodgrade paper that is free of all kinds of
                chemicals and chlorine.</div>

                <div>Our paper is biodegradable, recyclable and can be composited easily.</div>

                <div>
                <div>Our foodwrapping paper can be used in oven and microwave simultaneously.</div>
                <div>The quality and affordability of our paper makes us Asia's
                leading solution provider in the food and beverage packing industry.</div>
                <div>
                Our products are majorly used in the Hotels, Restraunts and Cafes
                for wrapping Breads, Burgers, Tacos, Sandwiches and Hotdogs and a
                number of other food items.
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
