import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css';
//1080*1920
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuCollapsed: true
    };
  }

  toggleMenu(){
    this.setState({...this.state, menuCollapsed: !this.state.menuCollapsed});
  }

  render() {
    var state = this.state;

    var cssPopup = "popup".concat(state.menuCollapsed ? " collapsed" : "");
    return (
      <div className="app">
        <nav>
          <div className={cssPopup}>
            <ul>
              <li>Optimpark</li>
              <li>Customization</li>
              <li>Assemblance</li>
              <li>Facade</li>
              <li>Turntable</li>
              <li>Scale</li>
              <li><hr/></li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="menu">
            <div className="logo">
              <img src={logo} alt="Logo"/>
            </div>
            <button className="button" onClick={this.toggleMenu.bind(this)}>Menu <i className="fa fa-bars"></i></button>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
