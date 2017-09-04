import React, { Component } from 'react';
import './About.css';
import logo from './logo.svg';

class About extends Component {
    toggleMenu() {

    }
    render() {
        return (
            <div className="app">
                <nav className="nav">
                    <div className="menu">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <button className="button back"><i className="fa fa-arrow-left"></i></button>
                        <button className="button upper pathway" onClick={this.toggleMenu.bind(this)}>Menu <i className="fa fa-bars"></i></button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default About;
