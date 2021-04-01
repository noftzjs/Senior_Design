
import React, { useState, useReducer, useContext } from 'react';
import { Redirect } from "react-router-dom";
import { login } from '../../providers/utils';
import { AuthContext } from '../../providers/AuthContext';

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
    case 'success': {
      return {
        ...state,

        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        userEmail: '',
        password: '',
      };
    }
    case 'logOut': {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  userEmail: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};


const Login = () => {

  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { userEmail, password, isLoading, error, isLoggedIn } = state;
  const { username, setUsername } = useContext(AuthContext);
  const { isLoggedin, setIsLoggedin } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'login' });

    try {
      await login({ userEmail, password });
      setUsername(userEmail);
      setIsLoggedin(true);
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  return (
    <div className="center modal-bg">
      <div className="form-group">
        {isLoggedIn ? (
          <>
            return<Redirect to="/" />
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            <h1>Log In</h1>
            <hr />
            {error && <p className='error'>{error}</p>}
            {/* <label>UC Email</label> */}
            <input type='text' className='form-control' placeholder='UC ID'
              value={userEmail}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'userEmail',
                  payload: e.currentTarget.value
                })} />
            <hr />
            {/* <label>Password</label> */}
            <input type='password' className='form-control' placeholder='password' autoComplete='new-password'
              value={password}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'password',
                  payload: e.currentTarget.value
                })
              } />
            <hr />
            <button type="submit" className="btn btn-danger" disabled={isLoading} >{isLoading ? 'Logging in...' : 'Login'}</button>
          </form>
        )}
      </div>
    </div>
  );
}


export default Login;