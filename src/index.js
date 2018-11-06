import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Person from './components/person/person';
import * as serviceWorker from './serviceWorker';
import Registration from './components/registration/registration';
import CreditInfo from './components/creditInfo/creditInfo';


ReactDOM.render( <Registration / > , document.querySelector('.Registration'));
ReactDOM.render( < CreditInfo / > , document.querySelector('.CreditInfo'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
