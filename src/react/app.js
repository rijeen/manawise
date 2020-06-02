import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import polyfill from 'dynamic-polyfill';

import { getPage } from './actions';
import { store } from './app/store';
import { CONFIG } from "./app/config";

import { init } from './app/actions';

//sass
import './sass/main.scss';
import TemplateIndex from "./app/templates/template.index";
import TemplateLast from "./app/templates/template.last";

//Hot reloading
if (module.hot) {
    module.hot.accept();
}

if (CONFIG.polyfill) {
    polyfill({...CONFIG.polyfill,
        afterFill() {
            __main();
        }
    });
} else {
    __main();
}

init();

function __main() {
    ReactDOM.render(<Provider store={store}><HashRouter>
        <Switch>
            <Route path="/lastwise" component={TemplateLast} />
            <Route path="/" component={TemplateIndex} />
        </Switch>
    </HashRouter></Provider>, document.getElementById('root'));
}
