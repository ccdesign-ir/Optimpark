import React, { Component } from 'react';
import './Advantages.css';
import Frame from './Components/Frame';
import adv1 from './assets/advantages1.png';
import adv2 from './assets/advantages2.jpg';
import adv31 from './assets/advantages31.jpg';
import adv32 from './assets/advantages32.jpg';
import adv33 from './assets/advantages33.jpg';
import H2 from './Components/H2';

class Advantages extends Component {
    render() {
        return (
            <Frame>
                <div className="advantages page-inner arvo">
                    <h1 className="title color-primary full-width">
                        Few advantages <br/>of why you should go with us
                    </h1>
                    <div className="third-width col2">
                        <div className="col">
                            <H2>Feel true safety</H2>
                            <div className="desktop"></div>
                            <em>Fire safety system</em>
                            <p className="text">Notifying firebreak system. Optimpark is the first
                        mechanized parking in Iran to notify the nearest fire station in case
                        of sudden fire incidents.</p>
                            <em>Scratch free car</em>
                            <p className="text">Zero damage to the car during parking. No dents or
                        scratches during parking process. Cool environment during extream daylight
                        heat condition.</p>
                            <em>Anti-theft system</em>
                            <p className="text">24/7 Anti-theft security system. Keep your vehicle
                        safe at anytime and anywhere with ultimate security system of Optimpark</p>
                            <em>Safe from top to bottom</em>
                            <p className="text">Zero chance of your vehicle falling down. The ferris
                        wheel system allows your vehicle to keep safe and still at any height
                        during its stay.</p>
                        </div>
                        <div className="col">
                            <img src={adv1} alt="advantages" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="content-part just-sub">
                        <H2>Turntable functionality</H2>
                    </div>
                    <div className="half-width cat-image">
                        <img src={adv2} alt="advantages" aria-hidden="true" />
                    </div>
                    <div className="half-width col2">
                        <div className="col">
                            <h3 className="color-alt">In-place spinning vehicle system</h3>
                        </div>
                        <div className="col">
                            <p className="text">With this advanced technology cars are free to
                            spin around in their spots without losing balance and getting
                            scratched.</p>
                        </div>
                    </div>
                    <div className="half-width col3">
                        <div className="col">
                            <img src={adv31} alt="" />
                        </div>
                        <div className="col">
                            <img src={adv32} alt="" />
                        </div>
                        <div className="col">
                            <img src={adv33} alt="" />
                        </div>
                    </div>
                    <div className="full-width arvo bg-primary">
                        <div className="content-part">
                            <H2>Feel true safety</H2>
                            <div className="bullets">
                                <div className="box">
                                    <em className="color-white">1. Easy installation, quick set-up, easy to move
                            and a 10 year guarantee</em>
                                    <p className="text">Optimpark's mechanized parking is set-up within 10
                            days; 7 days to biold the foundation, and another 3 days to install
                            the structure, run the building's electricity, and program the computer
                            system, moving it from one location to another within a very short period
                            of time. The ferris wheel system used in the parking, makes it a very
                            low cost parking structure.</p>
                                </div>
                                <div className="box">
                                    <em className="color-white">2. Minimum space consumption</em>
                                    <p className="text">Using only a '32 sq m' space for a vertical parking.
                        The ability to contain 16 cars in a 5.8m x 5.5m space vertically, whereas a normal parking lot is only capable of
                        holding maximum 2 cars. Optimpark's Turn-Table system allows for cars
                        to spin in the smallest areas.</p>
                                </div>
                                <div className="box">
                                    <em className="color-white">3. Saving space</em>
                                    <p className="text">There is no need for ramps or inefficient space
                                for cars to move around. Drivers no longer need to walk from their
                                cars to the elevator. this makes some extra free space for other
                                construction needs.</p>
                                </div>
                                <div className="box">
                                    <em className="color-white">4. High safety</em>
                                    <p className="text">A car that doesn't move, can't harm or scratch
                                another car. Anti-theft parking system. The ferris wheel system makes
                                it impossible for a parked car to fall down.</p>
                                </div>
                                <div className="box">
                                    <em className="color-white">5. Saving energy</em>
                                    <p className="text">No ventilation system required. Decreased usage of
                                gas and fuel during moving in or out. Minimum time needed for finding
                                parking spots. Zero sound pollution. Using minimum lighting to save energy.</p>
                                </div>
                                <div className="box">
                                    <em className="color-white">6. Flexibility in design and implementation</em>
                                    <p className="text">The ability to build the parking underground.
                                Cost-effective operation in deeper ground constructions. Ease of construction
                                and operation. Low cost soil stabilization and wall retaining.</p>
                                </div>
                                <div className="box">
                                    <em className="color-white">7. Customize your facade</em>
                                    <p className="text">The structure of Optimpark's parking system is easily
                                presentable anywhere. Designing your own facade for your parking is an easy
                                job to do considering your location. Advertising is also possible for those
                                who are willing to make more profit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Frame>
        )
    }
}

export default Advantages;
