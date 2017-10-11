import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import './Home-desktop.css';
import 'font-awesome/css/font-awesome.css';
import { Link } from 'react-router-dom';
import { Popup } from './Components';

import one from './assets/1.svg';
import two from './assets/2.svg';
import three from './assets/3.svg';
import four from './assets/4.svg';
import five from './assets/5.svg';
import six from './assets/6.svg';
import solution1 from './assets/solution1.png';
import solution2 from './assets/solution2.png';
import solution3 from './assets/solution3.png';
import solution4 from './assets/solution4.png';
import solution5 from './assets/solution5.png';
import solution6 from './assets/solution6.png';
import solution7 from './assets/solution7.png';
import solution8 from './assets/solution8.png';
import solution9 from './assets/solution9.png';
import image1 from './temp/image-01.jpg';
import image3 from './temp/image-03.jpg';
import image4 from './temp/image-04.jpg';
import image5 from './temp/image-05.jpg';
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
    this.explode_images = [solution1, solution2, solution3, solution4, solution5, solution6, solution7, solution8, solution9];
    this.windowOnWheelBinded = this.windowOnWheel.bind(this)
  }

  componentDidMount() {
    window.addEventListener('wheel', this.windowOnWheelBinded);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.windowOnWheelBinded);
  }

  toggleMenu(sectionName) {
    this.setState({ ...this.state, menuCollapsed: !this.state.menuCollapsed });
  }

  windowOnWheel(event) {
    if (this.state.isTransitioning || window.innerWidth < 1024) return;
    var hash = this.getHash();
    var index = this.sections.indexOf(hash);

    if (event.deltaY > 0) {
      if (index > 4) return;
      this.setState({ ...this.state, isTransitioning: true });
      this.props.history.push("#".concat(this.sections[index + 1]))
    }
    else {
      if (index < 1) return;
      this.setState({ ...this.state, isTransitioning: true });
      this.props.history.push("#".concat(this.sections[index - 1]))
    }

    setTimeout(() => {
      this.setState({ ...this.state, isTransitioning: false });
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

  lettering(str, space) {
    var l = (str.length - 1) * space / 2.0;
    return Array.prototype.map.call(str, (char, i) => {
      var style = {
        transform: 'translateX(-50%) rotate('.concat(i * space - l).concat('deg)')
      }
      return (<span key={i} style={style}>{char}</span>);
    });
  }

  explode(scale){
    // var l = this.explode_images.length - 1;

    return this.explode_images.map((img, i) => {
      // var offset = scale * (i - l/2.0);
      // var css = {
      //   transform: 'translate(calc('.concat(offset).concat('vw - 50%), calc(').concat(offset).concat('vh - 50%))')
      // }
      return ( <img key={i} src={img} alt="optimpark" aria-hidden="true" /> );
    });
  }

  render() {
    var state = this.state;
    var hash = this.getHash();
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
              <div className="explode">
                {this.explode(3)}
              </div>
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
              <div className="circle-adv">

                <div className="circle">
                  {this.lettering('7. Customize your facade', 3)}
                </div>
                <div className="circle">
                  {this.lettering('6. Flexibility in design and implementation', 3.43)}
                </div>
                <div className="circle">
                  {this.lettering('5. Saving energy', 4)}
                </div>
                <div className="circle">
                  {this.lettering('4. High safety', 4.8)}
                </div>
                <div className="circle">
                  {this.lettering('3. Saving space', 6)}
                </div>
                <div className="circle">
                  {this.lettering('2. Minimum space consumption', 8)}
                </div>
                <div className="circle color-primary">
                  {this.lettering('1. Quick installation', 12)}
                </div>
                <div className="circle bg-primary"></div>
              </div>
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
              <Link to="/">
                <img src={logo} alt="Logo" />
                <div className="logotype">
                  <img src={logotype} alt="optimpark" />
                </div>
              </Link>
            </div>
            <button className={cssMenu} onClick={this.toggleMenu.bind(this)}><span className="desktop">Menu </span><span className="bars"><img src={line} alt="" /><img src={line} alt="" /><img src={line} alt="" /></span></button>
          </div>
          <Popup onToggle={this.toggleMenu.bind(this)} collapsed={state.menuCollapsed} />
        </nav>
      </div>
    );
  }
}

export default Home;
