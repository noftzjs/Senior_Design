import React, { Component } from 'react';
import { observer } from 'mobx-react'
import UserStore from './UserStore'
import LoginForm from './LoginForm'
import SubmitButton from './SubmitButton'
import './App.css'
import userEvent from '@testing-library/user-event';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class LoginApp extends React.Component {
    async componentDidMount() {

        try {

            res = await fetch('isLoggedIn', {
                method: 'post',
                headers: {
                    'accept': 'application/json'
                }
            });
            result = await res.json();

            if (result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }

        catch (e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }
    render() {

        if (UserStore.loading) {
            return (
                <div className="loginApp">
                    <div className='!container'>
                        Loading, please hold tight.
               </div>
                </div>
            );
        }
    }
}
{
    if (UserStore.isLoggedIn) {
        <div className="loginApp">
            <div className='!container'>
                Welcome {UserStore.username}
                <SubmitButton
                    text={'log out'}
                    disabled={false}
                    onClick={() => this.doLogOut()}
                />
            </div>
        </div>
    }
}
return (
    <div className="loginApp">
        <div className='!container'>
            <SubmitButton
                text={'log out'}
                disabled={false}
                onClick={() => this.doLogOut()}
            />
            <LoginForm />
        </div>
    </div>
);
export default observerApp;
