import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes/routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Store from "./store/app.store";

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
