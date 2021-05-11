import './styles/fonts.scss';
import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from 'store/configureStore';

import App from './components/App';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

/* Create functionality in a sensible file to do the following:
 * TODO - retrieve the results from the provided products.json
 */
