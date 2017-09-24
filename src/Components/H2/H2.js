import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './H2.css';

export default class H2 extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    var css = "sub ".concat(this.props.className ? this.props.className : "color-alt"); 
    return (
      <h2 className={css}><span>{this.props.children}</span></h2>
    )
  }
}
