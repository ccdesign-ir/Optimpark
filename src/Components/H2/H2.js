import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './H2.css';

export default class H2 extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <h2 className="sub color-alt"><span>{this.props.children}</span></h2>
    )
  }
}
