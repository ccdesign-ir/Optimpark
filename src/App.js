import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css';
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
          </div>
        </section>
        <section id="customization ">
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
        <section id="assemblance ">
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
        <section id="facade ">
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
        <section id="turntable ">
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
        <section id="scale ">
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
              <li>Optimpark</li>
              <li>Customization</li>
              <li>Assemblance</li>
              <li>Facade</li>
              <li>Turntable</li>
              <li>Scale</li>
              <li><hr /></li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
