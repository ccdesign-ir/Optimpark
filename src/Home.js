import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import './Home-desktop.css';
import 'font-awesome/css/font-awesome.css';
import { HashLink as Link } from 'react-router-hash-link';
import one from './assets/1.svg';
import two from './assets/2.svg';
import three from './assets/3.svg';
import four from './assets/4.svg';
import five from './assets/5.svg';
import six from './assets/6.svg';
import image1 from './temp/image-01.jpg';
import image2 from './temp/image-02.jpg';
import image3 from './temp/image-03.jpg';
import image4 from './temp/image-04.jpg';
import image5 from './temp/image-05.jpg';
import image6 from './temp/image-06.jpg';
import line from './assets/line.svg';
import logotype from './assets/logotype.svg';

//1080*1920
//2560*1440

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: true,
      isTransitioning: false
    };
    this.sections = ['optimpark', 'solution', 'customization', 'facade', 'implementation', 'advantages'];
    this.windowOnWheelBinded = this.windowOnWheel.bind(this)
  }

  componentDidMount() {
    window.addEventListener('wheel', this.windowOnWheelBinded);
  }

  componentWillUnmount(){
    window.removeEventListener('wheel', this.windowOnWheelBinded);
  }

  toggleMenu(sectionName) {
    this.setState({ ...this.state, menuCollapsed: !this.state.menuCollapsed });
  }

  windowOnWheel(event){
    if (this.state.isTransitioning) return;
    var hash = this.getHash();
    var index = this.sections.indexOf(hash);
  
    if (event.deltaY > 0) {
      if (index > 4) return;
      this.setState({...this.state, isTransitioning: true});
      this.props.history.push("#".concat(this.sections[index + 1]))
    }
    else {
      if (index < 1) return;
      this.setState({...this.state, isTransitioning: true});
      this.props.history.push("#".concat(this.sections[index - 1]))
    }
  
    setTimeout(()=>{
      this.setState({...this.state, isTransitioning: false});
    }, 300);
  }

  getHash() {
    switch (this.props.location.hash) {
      case "#optimpark":
        return "optimpark";
      case "#solution":
        return "solution";
      case "#customization":
        return "customization";
      case "#facade":
        return "facade";
      case "#implementation":
        return "implementation";
      case "#advantages":
        return "advantages";
      default:
        return "optimpark";
    }
  }

  render() {
    var state = this.state;
    var hash = this.getHash();
    var cssPopup = "popup".concat(state.menuCollapsed ? " collapsed" : "");
    var cssMenu = "button upper pathway".concat(state.menuCollapsed ? " collapsed" : "")
    return (
      <div className="app">
        <section className={hash === "optimpark" ? "home-section active" : "home-section"} id="optimpark">
          <div className="odd">
            <div className="left">
              <div className="left-content">
                <h1>
                  <span className="color-primary">Less space, </span>
                  <span className="color-white">More space.</span>
                </h1>
                <hr className="seperator" />
              </div>
            </div>
            <div className="desktop right">
              <img src={image1} alt="optimpark" />
            </div>
            <Link to="/optimpark" className="button explore upper oswald">Explore</Link>
          </div>
        </section>
        <section className={hash === "solution" ? "home-section active" : "home-section"} id="solution">
          <div className="even">
            <div className="left">
              <div className="left-content">
                <h1>
                  <span className="color-primary">Save your space</span>
                  <span className="color-white">Save your money.</span>
                </h1>
                <hr className="seperator" />
              </div>
            </div>
            <div className="desktop right">
              <img src={image2} alt="solution" />
            </div>
            <Link to="/solution" className="button explore upper oswald">Explore</Link>
          </div>
        </section>
        <section className={hash === "customization" ? "home-section active" : "home-section"} id="customization">
          <div className="odd">
            <div className="left">
              <div className="left-content">
                <h1>
                  <span className="color-primary">Build your</span>
                  <span className="color-white">Customized parking lot.</span>
                </h1>
                <hr className="seperator" />
                <p>
                  It can be anyhting you want, anywhere you want it.
              Based on your surrounding environment build your
              customized parking lot with any material available
              in the country.
          </p>
              </div>
            </div>
            <div className="desktop right">
              <img src={image3} alt="customization" />
            </div>
            <Link to="/customization" className="button explore upper oswald">Explore</Link>
          </div>
        </section>
        <section className={hash === "facade" ? "home-section active" : "home-section"} id="facade">
          <div className="even">
            <div className="left">
              <div className="left-content">
                <h1>
                  <span className="color-primary">Design your </span>
                  <span className="color-white">facade</span>
                </h1>
                <hr className="seperator" />
                <p>Implementation of different designs and materials for your facade. Considering the availability of materials in the market, you can build and implement your preferred design anywhere.</p>
              </div>
            </div>
            <div className="desktop right">
              <img src={image4} alt="facade" />
            </div>
            <Link to="/facade" className="button explore upper oswald">Explore</Link>
          </div>
        </section>
        <section className={hash === "implementation" ? "home-section active" : "home-section"} id="implementation">
          <div className="odd">
            <div className="left">
              <div className="left-content">
                <h1>
                  <span className="color-primary">Anywhere </span>
                  <span className="color-white">is your space.</span>
                </h1>
                <hr className="seperator" />
                <p>
                  The ability to build your parking lot on any surface.
              Optimpark can be built on the ground, in the ground
              and in the ground.
          </p>
              </div>
            </div>
            <div className="desktop right">
              <img src={image5} alt="implementation" />
            </div>
            <Link to="/implementation" className="button explore upper oswald">Explore</Link>
          </div>
        </section>
        <section className={hash === "advantages" ? "home-section active" : "home-section"} id="advantages">
          <div className="even">
            <div className="left">
              <div className="left-content">
                <h1>
                  <span className="color-primary">
                    Safety <br />
                    Quick set-up <br />
                    Flexibility <br />
                    Energy-efficient <br />
                  </span>
                  <span className="color-white">
                    Are just a few of your <br className="desktop" />
                    advantages to go with us.<br />
                  </span>
                </h1>
                <hr className="seperator" />
              </div>
            </div>
            <div className="desktop right">
              <img src={image6} alt="advantages" />
            </div>
            <Link to="/advantages" className="button explore upper oswald">Explore</Link>
          </div>
        </section>

        <ul className="desktop navigator">
          <li className={hash === "optimpark" ? "upper active" : "upper"}><Link to="/#optimpark">Optimpark</Link></li>
          <li className={hash === "solution" ? "upper active" : "upper"}><Link to="/#solution">Solution</Link></li>
          <li className={hash === "customization" ? "upper active" : "upper"}><Link to="/#customization">Customization</Link></li>
          <li className={hash === "facade" ? "upper active" : "upper"}><Link to="/#facade">Facade</Link></li>
          <li className={hash === "implementation" ? "upper active" : "upper"}><Link to="/#implementation">Implementation</Link></li>
          <li className={hash === "advantages" ? "upper active" : "upper"}><Link to="/#advantages">Advantages</Link></li>
        </ul>


        <ul className="desktop socials upper color-white pathway">
          <li><a href="http://instagram.com" className="button"><i className="fa fa-instagram"></i></a></li>
          <li><a href="http://twitter.com" className="button"><i className="fa fa-twitter"></i></a></li>
          <li><a href="http://telegram.com" className="button"><i className="fa fa-telegram"></i></a></li>
        </ul>
        <div className="desktop number">
          <img className={hash === "optimpark" ? "active" : ""} src={one} alt="01" />
          <img className={hash === "solution" ? "active" : ""} src={two} alt="02" />
          <img className={hash === "customization" ? "active" : ""} src={three} alt="03" />
          <img className={hash === "facade" ? "active" : ""} src={four} alt="04" />
          <img className={hash === "implementation" ? "active" : ""} src={five} alt="05" />
          <img className={hash === "advantages" ? "active" : ""} src={six} alt="06" />
        </div>
        <nav className="home-nav">
          <div className="menu">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div className="logotype">
                <img src={logotype} alt="optimpark" />
              </div>
            </div>
            <button className={cssMenu} onClick={this.toggleMenu.bind(this)}><span className="desktop">Menu </span><span className="bars"><img src={line} alt="" /><img src={line} alt="" /><img src={line} alt="" /></span></button>
          </div>
          <div className={cssPopup}>
            <ul>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#optimpark" className="item">Optimpark</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#solution" className="item">Solution</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#customization" className="item">Customization</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#facade" className="item">Facade</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#implementation" className="item">Implementation</Link></li>
              <li><Link onClick={this.toggleMenu.bind(this)} to="#advantages" className="item">Advantages</Link></li>
              <li><hr /></li>
              <li><Link to="/about" onClick={this.toggleMenu.bind(this)} className="item">About us</Link></li>
              <li><Link to="/contact" onClick={this.toggleMenu.bind(this)} className="item">Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;
