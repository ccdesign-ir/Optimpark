import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left"></div>
        <div className="right"></div>

        <div className="page-map">
          <ul className="map">
            <li className="active">First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
            <li>Fifth</li>
          </ul>
        </div>
        <div className="social">
          <ul className="social-buttons">
            <li><a className="button" href="http://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
            <li><a className="button" href="http://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
            <li><a className="button" href="http://www.telegram.com" target="_blank"><i className="fa fa-paper-plane"></i></a></li>
          </ul>
          <span>Follow us on social media</span>
        </div>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="button menu"><span>Menu</span><i className="fa fa-bars"></i></button>
        </nav>
      </div>
    );
  }
}

export default App;
