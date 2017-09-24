import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
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
            isMenuCollapsed: true,
            isNavbarCollapsed: false
        }
    }

    componentDidMount() {
        var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.addEventListener('scroll', (event) => {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                if (this.state.isMenuCollapsed) this.setState({ ...this.state, isNavbarCollapsed: true });
            } else {
                if (this.state.isMenuCollapsed) this.setState({ ...this.state, isNavbarCollapsed: false });
            }
            lastScrollTop = st;
        }, false);
    }

    toggleMenu() {
        this.setState({ ...this.state, isMenuCollapsed: !this.state.isMenuCollapsed });
    }

    render() {
        var state = this.state;
        var cssPopup = "popup".concat(state.isMenuCollapsed ? " collapsed" : "");
        var cssMenu = "button upper pathway".concat(state.isMenuCollapsed ? " collapsed" : "");
        var cssNav = "menu".concat(state.isNavbarCollapsed ? " collapsed" : "");
        return (
            <div className="container">
                {this.props.children}
                <footer>
                    <div className="footer">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="logotype">
                            <img src={logotype} alt="Logotype" />
                        </div>
                        <ul className="desktop large upper pathway foot-nav">
                            <li><Link to="/#optimpark" className="button color-primary">Optimpark</Link></li>
                            <li><Link to="/#solution" className="button color-primary">Solution</Link></li>
                            <li><Link to="/#customization" className="button color-primary">Customization</Link></li>
                            <li><Link to="/facade" className="button color-primary">Facade</Link></li>
                            <li><Link to="/implementation" className="button color-primary">Implementation</Link></li>
                            <li><Link to="/advantages" className="button color-primary">Advantages</Link></li>
                            <li><Link to="/contactus" className="button color-primary">Contact us</Link></li>
                            <li><Link to="/" className="button color-primary">E-Catalog</Link></li>
                        </ul>
                        <ul className="footer-socials">
                            <li className="desktop color-primary upper pathway">Designed by CC</li>
                            <li><a href="http://instagram.com" className="button"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="http://twitter.com" className="button"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="http://telegram.com" className="button"><i className="fa fa-telegram"></i></a></li>
                        </ul>
                    </div>
                </footer>
                <nav className="nav">
                    <div className={cssNav}>
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <button className={cssMenu} onClick={this.toggleMenu.bind(this)}><span className="desktop">Menu </span><span className="bars"><img src={line} alt="" /><img src={line} alt="" /><img src={line} alt="" /></span></button>
                    </div>
                    <div className={cssPopup}>
                        <ul>
                            <li><HashLink onClick={this.toggleMenu.bind(this)} to="/#optimpark" className="item">Optimpark</HashLink></li>
                            <li><HashLink onClick={this.toggleMenu.bind(this)} to="/#solution" className="item">Solution</HashLink></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/customization" className="item">Customization</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/facade" className="item">Facade</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/implementation" className="item">Implementation</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/advantages" className="item">Advantages</Link></li>
                            <li><hr /></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/e-catalog" className="item">E-Catalog</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/about" className="item">About us</Link></li>
                            <li><Link onClick={this.toggleMenu.bind(this)} to="/contact" className="item">Contact us</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Frame;