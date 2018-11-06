import React, {Component} from 'react';

import './registration.css';
class Registration extends Component {
    render() {
        return ( 
           <div className = "login-section">
           <div className = 'container'>  
                    <p> Login </p> 
                    <input  className = "login" name = "login"/>
                    <p> Password </p> 
                    <input  className = "password" name = "password"/> <br/>
                    <input type = "button" value = "Login" id = "login" className = "btn-login"/> 
              </div>
               <p className = "showFalse" > </p>
               <hr/>
           </div>
               
           
        );
    }
}

export default Registration;