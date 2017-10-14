import React, { Component } from 'react';
import './Customization.css';
import { Frame, H2, Comein } from './Components';
import cust1 from './temp/stroke-grey.png';
import cust2 from './temp/stroke-blue.png';
import cust5 from './assets/poster.jpg';

class Customization extends Component {
    render() {
        return (
            <Frame>
                <div className="customization page-inner ubuntu">
                    <h1 className="title color-primary full-width">
                        Custom-Built Parking Lot
                    </h1>
                    <div className="col2 third-width">
                        <div className="col">
                            <Comein><H2>Anything you want,<br />anywhere you want it.</H2></Comein>
                            <Comein><p className="text">
                                By choosing your location, use the best and most
                                affordable design to run the construction. In your
                                '32 sq m' area, build up from a 8 to a 32 parking
                                capacity spot. wether the ground is uneven, or if
                                it's on the ground, in the ground or underground,
                                Optimpark technology allows its vertical parking
                                to be built on any surface depending on available
                                city spaces.
                            </p></Comein>
                        </div>
                        <div className="col vert-center">
                            <Comein><p className="bold">
                                New<br />generation<br />of mechanized<br />parking
                            </p></Comein>
                        </div>
                    </div>
                    <div className="third-width col2 container-points">
                        <div className="col image-points">
                            <img src={cust1} alt=""/>
                        </div>
                        <div className="col text-points">
                            <div className="point connected">
                                <em><span></span>Body dimensions</em>
                                <p className="text"><strong>W:</strong> 6m <strong>H:</strong> 12m</p>
                            </div>
                            <div className="point connected">
                                <em><span></span>Palette dimenssions</em>
                                <p className="text"><strong>W:</strong> 2.2m <strong>H:</strong> 4m <strong>D:</strong> 2m</p>
                            </div>
                            <div className="point">
                                <em>Weight capacity</em>
                                <p className="text">Capable of holding up to <strong>2.5 tons</strong></p>
                            </div>
                            <div className="point connected">
                                <em><span></span>Car entrance</em>
                                <p className="text"><strong>W:</strong> 3m <strong>H:</strong> 2m</p>
                            </div>
                        </div>
                    </div>
                    <div className="full-width bg-primary">
                        <div className="third-width just-sub">
                            <Comein><H2>Flexibility in customization</H2></Comein>
                        </div>
                        <div className="third-width col3">
                            <div className="col">
                                <img src={cust2} alt="wireframe" aria-hidden="true" />
                            </div>
                            <div className="col">
                                <img src={cust2} alt="wireframe" aria-hidden="true" />
                            </div>
                            <div className="col">
                                <img src={cust2} alt="wireframe" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                    <div className="full-width bg-white">
                        <div className="just-sub third-width">
                            <Comein><H2>Complete your parking lot <br className="desktop" />
                                with a modern looking facade</H2></Comein>
                        </div>
                    </div>
                    <div className="full-width cat-image">
                        <img src={cust5} alt="customization" aria-hidden="true" />
                    </div>
                </div>
            </Frame>
        )
    }
}

export default Customization;
