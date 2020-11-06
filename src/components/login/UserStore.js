import { extendObservable } from 'mobx';

class UserStore {
    constructor () {
        extendObservable(this, {

            loading: true,
            isLoggedIn: true,
            userName:
        
            extendObservable })
    }
}

export default  LogInForm();

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
