import React, { Component } from 'react';
import Frame from './Components/Frame';
import './Contact.css';
import vidMobile from './assets/mobile.mp4';
import imgMobile from './assets/mobile.svg';

export default class Contact extends Component {
    componentDidMount() {
        this.refs.video.play();
    }
    render() {
        return (
            <Frame>
                <div className="contacts ubuntu">
                    <video className="desktop" ref="video" width="100%">
                        <source src={vidMobile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img className="mobile" width="80%" src={imgMobile} alt="mobile" />
                    <div className="desktop vsep"></div>
                    <div className="contact">
                        <span>Contact us:</span>
                        <span>+98 313 468 7965</span>
                    </div>
                    <div className="contact">
                        <span>E-mail us:</span>
                        <span>info@optimpark.com</span>
                    </div>
                </div>
            </Frame>
        )
    }
}
