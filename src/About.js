import React, { Component } from 'react';
import './About.css';
import Frame from './Components/Frame';
import image from './temp/image-04.jpg';
import H2 from './Components/H2';

class About extends Component {
    render() {
        return (
            <Frame>
                <div className="aboutus arvo">
                    <h1 className="title">
                        We Build<br />
                        Mechanized Parking Lots
                    </h1>
                    <img className="cat-image" src={image} alt="optimpark" />
                    <H2>New Generation of parking</H2>
                    <p>Optimpark manufactures a new generation of mechanized parking. A solution to
                    consume minimum of resources to aquire optimum outcomes. We are experts in saving
                    maximum of space for car parking by reducing production costs and optimizing space
                    consumption.</p>
                    <p>Optimpark company produces smart mechanized parking lots for public and private
                    implementation. We create efficient solutions to customize, economize and optimize
                    your parking space.</p>
                    <div className="iso">
                        <span>ISO 9001-2015</span>
                        <span>ISO 14001-2015</span>
                        <span>CE</span>
                    </div>
                </div>
            </Frame>
        )
    }
}

export default About;
