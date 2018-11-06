import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Person from './components/person/person';
import * as serviceWorker from './serviceWorker';
import Registration from './components/registration/registration';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <Registration / > , document.querySelector('.Registration'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
