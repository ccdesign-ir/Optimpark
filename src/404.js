import React, { Component } from 'react';
import './404.css';
import Frame from './Components/Frame';
import { HashLink as Link } from 'react-router-hash-link';

export default class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Frame>
        <div className="page404 ubuntu">
          <i className="fa fa-ban"></i>
          <span>Noooooo!</span>
          <span>The page you are looking for doesn't exist.</span>
          <Link to="/" className="button">Take me home</Link>
        </div>
      </Frame>
    )
  }
}
