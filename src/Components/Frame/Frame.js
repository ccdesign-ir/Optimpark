import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Frame.css';
import logo from '../../logo.svg';
import line from '../../assets/line.svg';
import logotype from '../../assets/logotype.svg';
import Popup from '../Popup';

class Frame extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    constructor(props) {
        super(props);
        this.state = {
            lastScrollTop: null,
            isMenuCollapsed: true,
            isNavbarCollapsed: false
        }
        this.windowOnScrollBinded = this.windowOnScroll.bind(this)
    }

    componentDidMount() {
        var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.setState({lastScrollTop});
        window.addEventListener('scroll', this.windowOnScrollBinded, false);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.windowOnScrollBinded, false);
    }

    windowOnScroll(event){
        var lastScrollTop = this.state.lastScrollTop
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            if (this.state.isMenuCollapsed) this.setState({ isNavbarCollapsed: true});
        } else {
            if (this.state.isMenuCollapsed) this.setState({ isNavbarCollapsed: false});
        }
        this.setState({lastScrollTop: st});
    }

    toggleMenu() {
        console.log('sege')
        this.setState({ ...this.state, isMenuCollapsed: !this.state.isMenuCollapsed });
    }

    render() {
        var state = this.state;
        var cssMenu = "button upper pathway".concat(state.isMenuCollapsed ? " collapsed" : "");
        var cssCollapsed = "container".concat(state.isNavbarCollapsed ? " collapsed" : "");
        return (
            <div ref="container" className={cssCollapsed}>
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
                            <li><HashLink to="/#optimpark" className="button color-primary">Optimpark</HashLink></li>
                            <li><HashLink to="/#solution" className="button color-primary">Solution</HashLink></li>
                            <li><Link to="/customization" className="button color-primary">Customization</Link></li>
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
                    <div className="menu">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <button className={cssMenu} onClick={this.toggleMenu.bind(this)}><span className="desktop">Menu </span><span className="bars"><img src={line} alt="" /><img src={line} alt="" /><img src={line} alt="" /></span></button>
                    </div>
                    <Popup onToggle={() => {}} collapsed={state.isMenuCollapsed}/>
                </nav>
            </div>
        )
    }
};

export default Frame;