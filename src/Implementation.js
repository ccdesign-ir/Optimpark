import React, { Component } from 'react';
import './Implementation.css';
import { Frame, H2, Comein } from './Components';
import imp from './assets/implementation.jpg';
import imp2 from './assets/implementation2.jpg';

class Implementation extends Component {
    render() {
        return (
            <Frame>
                <div className="implementation page-inner ubuntu">
                    <h1 className="title color-primary full-width">
                        Anywhere is your space
                    </h1>
                    <div className="full-width bg-white">
                        <div className="cat-image">
                            <img src={imp} alt="implementation" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="full-width bg-white">
                        <div className="content-part">
                            <Comein><H2>On the ground, in the ground and underground</H2></Comein>
                            <Comein><p className="text">The ability to build on any surface. Optimpark gives
                        the ability to be built on the ground, underground and in the ground.</p></Comein>
                        </div>
                    </div>
                    <div className="full-width col2">
                        <div className="col">
                            <Comein animation="fade-in"><img src={imp2} alt="implementation" aria-hidden="true" /></Comein>
                        </div>
                        <div className="col content-part vert-center">
                            <Comein><H2>Minimum<br />cost of consolidation</H2></Comein>
                            <Comein><p className="text">Minimum cost of the soil and the wall. Build the most
                            cost efficient parking with Optimpark's technology.</p></Comein>
                        </div>
                    </div>
                </div>
            </Frame>
        )
    }
}

export default Implementation;
