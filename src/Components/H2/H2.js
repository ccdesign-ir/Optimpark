import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class H2 extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <h2 className="sub"><span>{this.props.children}</span></h2>
    )
  }
}
