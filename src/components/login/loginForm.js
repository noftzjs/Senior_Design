import React from 'react';
import UserStore from './UserStore.js'
import InputField from './inputfield'
import SubmitButton from './SubmitButton'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
this.state = {
    username: '',
    password:'',
buttonDisabled: false
}
       setInputValue(property,vol) ;{
           val = val.trim();
           if (val.length > 25) {
               return;
           }
           this.setState({
               [property]: val
           })
       }
    } 
    resetForm() {
        this.setState({
            username: '',
            password:'',
        buttonDisabled: false
        })
    }
    async doLogin() {
        if (this.state.username) {
            return;
        }
        if (this.state.password) {
            return;
    }
    this.setState({
        buttonDisabled: true
    })
    try{
Let; res = await fetch('login', {
    method: 'post',
    headers: {
        'accept': 'application/json'
    },
    body: json.stringify({
        username: this.state.username,
        password: this.state.password,
    })
});
let result = await res.json();
if (result && result.success) {
    UserStore = is.LoggedIn = true;
    UserStore.username = result.username;
}
else if (result && result.success === false) {
    this.resetForm();
    alert(result.msg);
}
    }
    catch(e) {
console.log(e);
this.resetForm();
    }
    render () ;{
        return (
           <div className = "loginForm">
                 Log In 
                 <InputField
                 type= 'text'
                 placeholder= 'username'
                 value= { this.state.username ? this.state.username : ''}
                 onChange={ (val) => this.setInputValue('username', val)}
                 />
   
                 <InputField
                 type= 'text'
                 placeholder= 'password'
                 value= { this.state.password ? this.state.password : ''}
                 onChange={ (val) => this.setInputValue('password', val)}
                 />
                 <SubmitButton
                 text= ''
                 disabled= {this.state.buttonDisabled}
                 onClick={ () => this.doLogin() }
                 />
           </div>
        );
    }
}

export ;default ;LoginForm;

}
