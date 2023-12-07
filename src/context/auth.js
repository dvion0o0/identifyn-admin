import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openAddressModal, setOpenAddressModal] = useState(false);

  const login = (userData) => {
    // Perform login logic and set the user state
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic and clear the user state
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, setNotification, notification, setOpenAddressModal, openAddressModal }}>
      {children}
    </AuthContext.Provider>
  );
};