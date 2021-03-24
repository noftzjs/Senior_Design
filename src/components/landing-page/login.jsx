
import React, { useState, useReducer, useContext } from 'react';
import Axios from 'axios';
import { login } from '../../providers/utils';

const UserContext = React.createContext({name: '', auth: false});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = React.useState({ name: '', auth: false });

  const login = (name) => {
    setUsername((username) => ({
      name: name,
      auth: true,
    }));
  };

  const logout = () => {
    setUsername((username) => ({
      name: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

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

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await login({ userEmail, password });
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
            <h1>Welcome {userEmail}!</h1>
            <button onClick={() => dispatch({ type: 'logOut' })}>
              Log Out
            </button>
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
            <button type="submit" className="btn btn-primary" disabled={isLoading} >{isLoading ? 'Logging in...' : 'Login'}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;