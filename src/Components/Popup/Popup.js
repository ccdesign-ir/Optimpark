import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Popup.css';

export default class Popup extends Component {
    static propTypes = {
        collapsed: PropTypes.bool,
        onToggle: PropTypes.func
    }

    render() {
        var cssPopup = "popup ubuntu ".concat(this.props.collapsed ? " collapsed" : "");
        return (
            <div className={cssPopup}>
                <ul>
                    <li><HashLink onClick={this.props.onToggle} to="/#optimpark" className="item">Optimpark</HashLink></li>
                    <li><HashLink onClick={this.props.onToggle} to="/#solution" className="item">Solution</HashLink></li>
                    <li><Link onClick={this.props.onToggle} to="/customization" className="item">Customization</Link></li>
                    <li><Link onClick={this.props.onToggle} to="/facade" className="item">Facade</Link></li>
                    <li><Link onClick={this.props.onToggle} to="/implementation" className="item">Implementation</Link></li>
                    <li><Link onClick={this.props.onToggle} to="/advantages" className="item">Advantages</Link></li>
                    <li><hr /></li>
                    <li><Link onClick={this.props.onToggle} to="/e-catalog" className="item">E-Catalog</Link></li>
                    <li><Link onClick={this.props.onToggle} to="/about" className="item">About us</Link></li>
                    <li><Link onClick={this.props.onToggle} to="/contact" className="item">Contact us</Link></li>
                </ul>
            </div>
        )
    }
}
