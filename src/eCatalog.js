import React, { Component } from 'react';
import {Frame, H2} from './Components';
import './eCatalog.css';

export default class eCatalog extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Frame>
                <div className="e-catalog page-inner ubuntu">
                    <div className="full-width">
                        <div className="content-part">
                            <h2 className="sub color-primary">Download our <br />E-catalog by clicking <br />the button bellow.</h2>
                            <div className="mobile"></div>
                            <a href="#" className="button bg-alt download">Download</a>
                        </div>
                    </div>
                </div>
            </Frame>
        )
    }
}
