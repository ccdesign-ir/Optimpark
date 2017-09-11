import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import './Frame.css';
import logo from '../../logo.svg';
import line from '../../assets/line.svg';
import logotype from '../../assets/logotype.svg';

class Frame extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    constructor(props) {
        super(props);
        this.state = {
            isMenuCollapsed: true
        }
    }

    toggleMenu() {
        this.setState({ ...this.state, menuCollapsed: !this.state.menuCollapsed });
    }

    render() {
        var state = this.state;
        var cssPopup = "popup".concat(state.menuCollapsed ? "" : " collapsed");
        var cssMenu = "button upper pathway".concat(state.menuCollapsed ? "" : " collapsed")
        return (
            <div className="app">
                <nav className="nav">
                    <div className="menu">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <button className={cssMenu} onClick={this.toggleMenu.bind(this)}><span className="desktop">Menu </span><span className="bars"><img src={line} alt="" /><img src={line} alt="" /><img src={line} alt="" /></span></button>
                    </div>
                    <div className={cssPopup}>
                        <ul>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/#optimpark" className="item">Optimpark</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/#solution" className="item">Solution</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/#customization" className="item">Customization</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/#facade" className="item">Facade</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/#implementation" className="item">Implementation</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/#advantages" className="item">Advantages</Link></li>
                            <li><hr /></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/about" className="item">About us</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/contact" className="item">Contact us</Link></li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
                <footer>
                    <div className="footer">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                            <div className="logotype">
                                <img src={logotype} alt="Logotype" />
                            </div>
                        </div>
                        <ul className="footer-socials">
                            <li><a href="http://instagram.com" className="button"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="http://twitter.com" className="button"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="http://telegram.com" className="button"><i className="fa fa-telegram"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Frame;