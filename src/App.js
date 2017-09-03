import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App-desktop.css';
import 'font-awesome/css/font-awesome.css';
import { HashLink as Link } from 'react-router-hash-link';
//1080*1920
//2560*1440
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: true
    };
  }

  toggleMenu(sectionName) {
    this.setState({ ...this.state, menuCollapsed: !this.state.menuCollapsed });
  }

  getHash() {
    switch (this.props.location.hash) {
      case "#optimpark":
        return "optimpark";
      case "#customization":
        return "customization";
      case "#assemblance":
        return "assemblance";
      case "#facade":
        return "facade";
      case "#turntable":
        return "turntable";
      case "#scale":
        return "scale";
      default:
        return "optimpark";
    }
  }

  render() {
    var state = this.state;
    var hash = this.getHash();
    var cssPopup = "popup".concat(state.menuCollapsed ? " collapsed" : "");
    return (
      <div className="app">
        <section className={hash === "optimpark" ? "active" : ""} id="optimpark">
          <div className="odd">
            <div className="left">
              <h1>
                <span className="black">Less space, </span>
                <span className="white">More space.</span>
              </h1>
              <hr className="seperator" />
              <p>
                Advanced spinning parking system. With this advanced technology cars are free to spin around in their
              spots without losing balance and getting scratched.
              </p>
            </div>
            <div className="desktop right"></div>
            <button className="button explore upper">Explore</button>
          </div>
        </section>
        <section className={hash === "customization" ? "active" : ""} id="customization">
          <div className="even">
            <div className="left">
              <h1>
                <span className="black">Less space, </span>
                <span className="white">More sapce.</span>
              </h1>
              <hr className="seperator" />
              <p>
                Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            </div>
            <div className="desktop right"></div>
            <button className="button explore upper">Explore</button>
          </div>
        </section>
        <section className={hash === "assemblance" ? "active" : ""} id="assemblance">
          <div className="odd">
            <div className="left">
              <h1>
                <span className="black">Less space, </span>
                <span className="white">More sapce.</span>
              </h1>
              <hr className="seperator" />
              <p>
                Advanced spinning parking system. With this advanced technology cars are free to spin around in their
          spots without losing balance and getting scratched.
          </p>
            </div>
            <div className="desktop right"></div>
            <button className="button explore upper">Explore</button>
          </div>
        </section>
        <section className={hash === "facade" ? "active" : ""} id="facade">
          <div className="even">
            <div className="left">
              <h1>
                <span className="black">Less space, </span>
                <span className="white">More sapce.</span>
              </h1>
              <hr className="seperator" />
              <p>
                Advanced spinning parking system. With this advanced technology cars are free to spin around in their
          spots without losing balance and getting scratched.
          </p>
            </div>
            <div className="desktop right"></div>
            <button className="button explore upper">Explore</button>
          </div>
        </section>
        <section className={hash === "turntable" ? "active" : ""} id="turntable">
          <div className="odd">
            <div className="left">
              <h1>
                <span className="black">Less space, </span>
                <span className="white">More sapce.</span>
              </h1>
              <hr className="seperator" />
              <p>
                Advanced spinning parking system. With this advanced technology cars are free to spin around in their
          spots without losing balance and getting scratched.
          </p>
            </div>
            <div className="desktop right"></div>
            <button className="button explore upper">Explore</button>
          </div>
        </section>
        <section className={hash === "scale" ? "active" : ""} id="scale">
          <div className="even">
            <div className="left">
              <h1>
                <span className="black">Less space, </span>
                <span className="white">More sapce.</span>
              </h1>
              <hr className="seperator" />
              <p>
                Advanced spinning parking system. With this advanced technology cars are free to spin around in their
          spots without losing balance and getting scratched.
          </p>
            </div>
            <div className="desktop right"></div>
            <button className="button explore upper">Explore</button>
          </div>
        </section>

        <ul className="desktop navigator">
          <li className={hash === "optimpark" ? "upper active" : "upper"}><Link to="#optimpark" className="item">Optimpark</Link></li>
          <li className={hash === "customization" ? "upper active" : "upper"}><Link to="#customization" className="item">Customization</Link></li>
          <li className={hash === "assemblance" ? "upper active" : "upper"}><Link to="#assemblance" className="item">Assemblance</Link></li>
          <li className={hash === "facade" ? "upper active" : "upper"}><Link to="#facade" className="item">Facade</Link></li>
          <li className={hash === "turntable" ? "upper active" : "upper"}><Link to="#turntable" className="item">Turntable</Link></li>
          <li className={hash === "scale" ? "upper active" : "upper"}><Link to="#scale" className="item">Scale</Link></li>
        </ul>

        <nav>
          <div className="menu">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <button className="button upper" onClick={this.toggleMenu.bind(this)}>Menu <i className="fa fa-bars"></i></button>
          </div>
          <div className={cssPopup}>
            <button className="button close" onClick={this.toggleMenu.bind(this)}><i className="fa fa-times"></i></button>
            <ul>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#optimpark" className="item">Optimpark</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#customization" className="item">Customization</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#assemblance" className="item">Assemblance</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#facade" className="item">Facade</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#turntable" className="item">Turntable</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#scale" className="item">Scale</Link></li>
              <li><hr /></li>
              <li><a href="about.html" className="item">About us</a></li>
              <li><a href="contact.html" className="item">Contact us</a></li>
            </ul>
          </div>
        </nav>
        <ul className="desktop socials upper white">
          <li>Follow us on social media</li>
          <li><a href="http://instagram.com" className="button"><i className="fa fa-instagram"></i></a></li>
          <li><a href="http://twitter.com" className="button"><i className="fa fa-twitter"></i></a></li>
          <li><a href="http://telegram.com" className="button"><i className="fa fa-telegram"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default App;
