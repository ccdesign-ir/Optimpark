import React, { Component } from 'react';
import './Customization.css';
import Frame from './Components/Frame';
import H2 from './Components/H2';

class Customization extends Component {
    render() {
        return (
            <Frame>
                <div className="customization page-inner arvo">
                    <h1 className="title color-primary full-width">
                        Custom-Built Parking Lot
                    </h1>
                </div>
            </Frame>
        )
    }
}

export default About;
