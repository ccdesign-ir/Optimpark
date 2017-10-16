import React, { Component } from 'react';
import './Advantages.css';
import { Frame, H2, Comein } from './Components';
import adv1 from './assets/advantages1.png';
import adv2 from './assets/advantages2.jpg';
import adv31 from './assets/advantages31.jpg';
import adv32 from './assets/advantages32.jpg';
import adv33 from './assets/advantages33.jpg';

class Advantages extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Frame>
                <div className="advantages page-inner ubuntu">
                    <h1 className="title color-primary full-width">
                        Few advantages <br />of why you should go with us
                    </h1>
                    <div className="third-width col2">
                        <div className="col">
                            <Comein><H2>Feel true safety</H2></Comein>
                            <div className="box2">
                                <Comein><em>Fire safety system</em></Comein>
                                <Comein><p className="text">Notifying firebreak system. Optimpark is the first
                        mechanized parking in Iran to notify the nearest fire station in case
                        of sudden fire incidents.</p></Comein>
                            </div>
                            <div className="box2">
                                <Comein><em>Scratch free car</em></Comein>
                                <Comein><p className="text">Zero damage to the car during parking. No dents or
                        scratches during parking process. Cool environment during extream daylight
                        heat condition.</p></Comein>
                            </div>
                            <div className="box2">
                                <Comein><em>Anti-theft system</em></Comein>
                                <Comein><p className="text">24/7 Anti-theft security system. Keep your vehicle
                        safe at anytime and anywhere with ultimate security system of Optimpark</p></Comein>
                            </div>
                            <div className="box2">
                                <Comein><em>Safe from top to bottom</em></Comein>
                                <Comein><p className="text">Zero chance of your vehicle falling down. The ferris
                        wheel system allows your vehicle to keep safe and still at any height
                        during its stay.</p></Comein>
                            </div>
                        </div>
                        <div className="col">
                            <Comein animation="fade-in"><img src={adv1} alt="advantages" aria-hidden="true" /></Comein>
                        </div>
                    </div>
                    <div className="full-width bg-white framed">
                        <div className="just-sub">
                            <Comein><H2>Turntable functionality</H2></Comein>
                        </div>
                        <Comein animation="fade-in"><div className="cat-image">
                            <img src={adv2} alt="advantages" aria-hidden="true" />
                        </div></Comein>
                        <div className="col2">
                            <div className="col">
                                <Comein><H2>In-place spinning vehicle system</H2></Comein>
                            </div>
                            <div className="col">
                                <Comein><p className="text">With this advanced technology cars are free to
                                spin around in their spots without losing balance and getting
                                scratched.</p></Comein>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="col">
                                <Comein animation="fade-in"><img src={adv32} alt="" /></Comein>
                            </div>
                            <div className="col">
                                <Comein animation="fade-in"><img src={adv31} alt="" /></Comein>
                            </div>
                            <div className="col">
                                <Comein animation="fade-in"><img src={adv33} alt="" /></Comein>
                            </div>
                        </div>
                    </div>
                    <div className="full-width ubuntu bg-primary framed">
                        <div className="">
                            <Comein><H2>Feel true safety</H2></Comein>
                            <div className="bullets">
                                <div className="box">
                                    <Comein><em className="color-white">1. Easy installation, quick set-up, easy to move
                            and a 10 year guarantee</em></Comein>
                                    <Comein><p className="text">Optimpark's mechanized parking is set-up within 10
                            days; 7 days to biold the foundation, and another 3 days to install
                            the structure, run the building's electricity, and program the computer
                            system, moving it from one location to another within a very short period
                            of time. The ferris wheel system used in the parking, makes it a very
                            low cost parking structure.</p></Comein>
                                </div>
                                <div className="box">
                                    <Comein><em className="color-white">2. Minimum space consumption</em></Comein>
                                    <Comein><p className="text">Using only a '32 sq m' space for a vertical parking.
                        The ability to contain 16 cars in a 5.8m x 5.5m space vertically, whereas a normal parking lot is only capable of
                        holding maximum 2 cars. Optimpark's Turn-Table system allows for cars
                        to spin in the smallest areas.</p></Comein>
                                </div>
                                <div className="box">
                                    <Comein><em className="color-white">3. Saving space</em></Comein>
                                    <Comein><p className="text">There is no need for ramps or inefficient space
                                for cars to move around. Drivers no longer need to walk from their
                                cars to the elevator. this makes some extra free space for other
                                construction needs.</p></Comein>
                                </div>
                                <div className="box">
                                    <Comein><em className="color-white">4. High safety</em></Comein>
                                    <Comein><p className="text">A car that doesn't move, can't harm or scratch
                                another car. Anti-theft parking system. The ferris wheel system makes
                                it impossible for a parked car to fall down.</p></Comein>
                                </div>
                                <div className="box">
                                    <Comein><em className="color-white">5. Saving energy</em></Comein>
                                    <Comein><p className="text">No ventilation system required. Decreased usage of
                                gas and fuel during moving in or out. Minimum time needed for finding
                                parking spots. Zero sound pollution. Using minimum lighting to save energy.</p></Comein>
                                </div>
                                <div className="box">
                                    <Comein><em className="color-white">6. Flexibility in design and implementation</em></Comein>
                                    <Comein><p className="text">The ability to build the parking underground.
                                Cost-effective operation in deeper ground constructions. Ease of construction
                                and operation. Low cost soil stabilization and wall retaining.</p></Comein>
                                </div>
                                <div className="box">
                                    <Comein><em className="color-white">7. Customize your facade</em></Comein>
                                    <Comein><p className="text">The structure of Optimpark's parking system is easily
                                presentable anywhere. Designing your own facade for your parking is an easy
                                job to do considering your location. Advertising is also possible for those
                                who are willing to make more profit.</p></Comein>
                                </div>

                                <div className="desktop v-sep"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </Frame>
        )
    }
}

export default Advantages;
