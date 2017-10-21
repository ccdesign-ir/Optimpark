import React, { Component } from 'react';
import Frame from './Components/Frame';
import './Contact.css';
import imgMobile from './assets/mobile.svg';

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Frame>
                <div className="contacts ubuntu">
                    <img className="phone" width="80%" src={imgMobile} alt="mobile" />
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
