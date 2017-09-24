import React, { Component } from 'react';
import {Frame, H2} from './Components';
import './eCatalog.css';

export default class eCatalog extends Component {
    render() {
        return (
            <Frame>
                <div className="e-catalog page-inner arvo">
                    <div className="full-width">
                        <div className="content-part">
                            <H2 className="color-primary">Download our <br />E-catalog by clicking <br />the button bellow.</H2>
                            <a href="#" className="button bg-alt download">Download</a>
                        </div>
                    </div>
                </div>
            </Frame>
        )
    }
}
