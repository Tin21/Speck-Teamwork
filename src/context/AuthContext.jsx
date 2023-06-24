import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getLoggedUser } from '../api/users';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('jwt_token') ? true : false,
  );

  const [loggedUser, setLoggedUser] = useState(
    localStorage.getItem('jwt_token') == null
      ? ''
      : getLoggedUser(
          localStorage.getItem('jwt_token'),
          localStorage.getItem('logged_user_id'),
        ),
  );

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
