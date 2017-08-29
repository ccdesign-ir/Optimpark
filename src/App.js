import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App-desktop.css';
import 'font-awesome/css/font-awesome.css';
import Scrollchor from 'react-scrollchor';
//1080*1920
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: true
    };
  }

  toggleMenu() {
    this.setState({ ...this.state, menuCollapsed: !this.state.menuCollapsed });
  }

  render() {
    var state = this.state;

    var cssPopup = "popup".concat(state.menuCollapsed ? " collapsed" : "");
    return (
      <div className="app">
        <section id="optimpark">
          <div className="odd">
            <h1>Easy to assemble</h1>
            <h1>Easy to assemble</h1>
            <p>
              Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            <hr/>
            <button className="button explore">Explore</button>
            <div className="desktop right"></div>
          </div>
        </section>
        <section id="customization">
          <div className="even">
            <h1>Easy to assemble</h1>
            <h1>Easy to assemble</h1>
            <p>
              Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            <hr/>
            <button className="button explore">Explore</button>
          </div>
        </section>
        <section id="assemblance">
          <div className="odd">
            <h1>Easy to assemble</h1>
            <h1>Easy to assemble</h1>
            <p>
              Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            <hr/>
            <button className="button explore">Explore</button>
          </div>
        </section>
        <section id="facade">
          <div className="even">
            <h1>Easy to assemble</h1>
            <h1>Easy to assemble</h1>
            <p>
              Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            <hr/>
            <button className="button explore">Explore</button>
          </div>
        </section>
        <section id="turntable">
          <div className="odd">
            <h1>Easy to assemble</h1>
            <h1>Easy to assemble</h1>
            <p>
              Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            <hr/>
            <button className="button explore">Explore</button>
          </div>
        </section>
        <section id="scale">
          <div className="even">
            <h1>Easy to assemble</h1>
            <h1>Easy to assemble</h1>
            <p>
              Advanced spinning parking system. With this advanced technology cars are free to spin around in their
            spots without losing balance and getting scratched.
            </p>
            <hr/>
            <button className="button explore">Explore</button>
          </div>
        </section>

        <nav>
          <div className="menu">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <button className="button" onClick={this.toggleMenu.bind(this)}>Menu <i className="fa fa-bars"></i></button>
          </div>
          <div className={cssPopup}>
            <button className="button close" onClick={this.toggleMenu.bind(this)}><i className="fa fa-times"></i></button>
            <ul>
              <li><Scrollchor beforeAnimate={this.toggleMenu.bind(this)} to="#optimpark" className="item">Optimpark</Scrollchor></li>
              <li><Scrollchor beforeAnimate={this.toggleMenu.bind(this)} to="#customization" className="item">Customization</Scrollchor></li>
              <li><Scrollchor beforeAnimate={this.toggleMenu.bind(this)} to="#assemblance" className="item">Assemblance</Scrollchor></li>
              <li><Scrollchor beforeAnimate={this.toggleMenu.bind(this)} to="#facade" className="item">Facade</Scrollchor></li>
              <li><Scrollchor beforeAnimate={this.toggleMenu.bind(this)} to="#turntable" className="item">Turntable</Scrollchor></li>
              <li><Scrollchor beforeAnimate={this.toggleMenu.bind(this)} to="#scale" className="item">Scale</Scrollchor></li>
              <li><hr /></li>
              <li><a href="about.html" className="item">About us</a></li>
              <li><a href="contact.html" className="item">Contact us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
