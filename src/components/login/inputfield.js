import React from 'react';

class InputField extends React.Component {
    render () {
        return (
           <div className = "inputField">
           <input
           className='input'
           type={this.props.type}
           placeholder={this.props.placeholder}
           value={this.props.value}
           onChange={ (e) => this.props.onChange(e.target.value)}
           />
           </div>
        );
    }
}

export default InputField;
var ActiveDirectory = require('activedirectory2');
var config = { url: 'ldap://dc.domain.com',
               baseDN: 'dc=domain,dc=com',
               username: 'username@domain.com',
               password: 'password' }
var ad = new ActiveDirectory(config);
ActiveDirectory = {

    url = "ldaps;//ad.uc.edu",
    
    baseDN = "dc=ad,dc=uc,dc=edu",
    
    username = "bertketm@mail.uc.edu",
    
    password = "Sportslover17!",
    
    domain = "ad.uc.edu",
    
    attributes = {
    
    "user": [
    
    "userPrincipalName",
    
    "mail",
    
    "sAMAccountName",
    
    "sn",
    
    "givenName",
    
    "cn",
    
    "displayName",
    
    "telephoneNumber",
    
    "group"
    
    ]
    
    },
    
    tlsOptions = {
    
    rejectUnauthorized = false
}
}