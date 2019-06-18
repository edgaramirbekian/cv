import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Boostrap from 'bootstrap/dist/css/bootstrap.css';
import Favicon from 'react-favicon';

const RenderApp = Component => ReactDOM.render(
    <div className="cv-app">
        <Favicon url="https://github.com/edgaramirbekian/cv/blob/master/public/favicon.ico" />
        <Component />
    </div>,
    document.getElementById('root'));


RenderApp(App);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Webpack Hot Module Replacement API

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./App', () => {
            // console.log('Hot reload just happened');
            const NextApp = require('./App').default;
            RenderApp(NextApp);
        });
    }
}