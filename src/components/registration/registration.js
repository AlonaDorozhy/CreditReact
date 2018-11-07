import React, {Component} from 'react';

import './registration.css';
class Registration extends Component {
    state = {
    login: 'Login',
    pussword: 'Pussword'
}
// changeTitle =(event)=>{
//     console.log(event.target.value)
//     this.setState({
//         title: event.target.value
//     })
// }
 inputValue= (event)=>{
    
this.setState({
    login: this.refs.Login.value,
    pussword: this.refs.Pussword.value
})
}
    render() {
        return ( 
           <div className = "login-section">
           <div className = 'container'>  
                    <p> Login </p> 
                    <input ref = {'Login'} className = "login" name = "login"/>
                    <p> Password </p> 
                    <input ref = {'Pussword'} className = "password" name = "password"/> <br/>
                    <input type = "button" onClick = {this.inputValue} value = "Login" id = "login" className = "btn-login"/> 

                    <h1>{this.state.login} {this.state.pussword}</h1>
              </div>
               <p  className = "showFalse" > </p>
               <hr/>
           </div>
               
           
        );
    }
}

export default Registration;