import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Customization from './Customization';
import Facade from './Facade';
import Implementation from './Implementation';
import Advantages from './Advantages';
import eCatalog from './eCatalog';
import NotFound from './404';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/facade" component={Facade} />
            <Route path="/implementation" component={Implementation} />
            <Route path="/advantages" component={Advantages} />
            <Route path="/e-catalog" component={eCatalog} />
            <Route path="/customization" component={Customization} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
