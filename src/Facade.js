import React, { Component } from 'react';
import './Facade.css';
import Frame from './Components/Frame';
import facade1 from './assets/facade1.jpg';
import facade2 from './assets/facade2.jpg';
import facade3 from './assets/facade3.jpg';
import H2 from './Components/H2';

class Facade extends Component {
    render() {
        return (
            <Frame>
                <div className="facade page-inner arvo">
                    <h1 className="title color-primary full-width">
                        Design your facade<br />
                        Just the way you want it
                    </h1>
                    <div className="cat-image full-width">
                        <img src={facade1} alt="facade" aria-hidden="true" />
                    </div>
                    <div className="content-part">
                        <H2>Implementation of different designs and materials for your facade</H2>
                        <p className="text">Build your dream facade. Considering the availability of
                        materials in the market, you can build and implement your preferred design
                        anywhre.</p>
                    </div>
                    <div className="full-width col2">
                        <div className="col">
                            <img src={facade2} alt="facade" aria-hidden="true" />
                        </div>
                        <div className="col content-part vert-center bg-white">
                            <H2>Advertisement solutions</H2>
                            <p className="text">From banners to holograms. You can place your desired
                            advertisement on the facade for maximum profit in your business.</p>
                            <p className="bold">It's not just <br className="desktop" />
                                a parking system, <br className="desktop" />
                                it's a business <br className="desktop" />
                                accelerator.</p>
                        </div>
                    </div>
                    <div className="content-part just-sub">
                        <H2>Satnd out</H2>
                    </div>
                    <div className="cat-image full-width">
                        <img src={facade3} alt="facade" aria-hidden="true" />
                    </div>
                </div>
            </Frame>
        )
    }
}

export default Facade;
