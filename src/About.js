import React, { Component } from 'react';
import './About.css';
import {Frame, H2, Comein} from './Components';
import image from './assets/new_image.jpg';
//f8f8f8
class About extends Component {
    render() {
        return (
            <Frame>
                <div className="aboutus page-inner ubuntu">
                    <h1 className="title color-primary full-width">
                        We build<br />
                        mechanized parking lots
                    </h1>
                    <div className="cat-image full-width">
                        <img src={image} alt="optimpark" aria-hidden="true"/>
                    </div>
                    <div className="content-part">
                        <Comein><H2>New generation of parking</H2></Comein>
                        <Comein><p className="text">Optimpark manufactures a new generation of mechanized parking. A solution to
                    consume minimum of resources to aquire optimum outcomes. We are experts in saving
                    maximum of space for car parking by reducing production costs and optimizing space
                    consumption. Optimpark company produces smart mechanized parking lots for public and private
                    implementation. We create efficient solutions to customize, economize and optimize
                    your parking space.</p></Comein>
                        <Comein><div className="iso">
                            <span>ISO 9001-2015</span>
                            <span>ISO 14001-2015</span>
                            <span>CE</span>
                        </div></Comein>
                    </div>

                </div>
            </Frame>
        )
    }
}

export default About;
