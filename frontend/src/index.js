import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS
import './assets/css/main.scss';

// State
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers/Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Service worker
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
