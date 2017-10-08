import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Comein.css';

export default class Comein extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props){
    super(props);
    this.state = {
        isRolled: false,
    };

    this.windowOnScrollBinded = this.windowOnScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.windowOnScrollBinded, false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.windowOnScrollBinded, false);
  }

  windowOnScroll(event){
    this.setState({isRolled: this.isRollable()});
  }

  isRollable(){
    var rect = this.refs.container.getBoundingClientRect();
    return rect.top < window.innerHeight;
  }

  render() {
    var css = classNames("come-in", {rolled: this.state.isRolled});  
    return (
      <div ref="container" className={css}>
        {this.props.children}
      </div>
    )
  }
}
