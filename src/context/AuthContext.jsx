import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('jwt_token') ? true : false,
  );

  const [loggedUser, setLoggedUser] = useState(null);

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
