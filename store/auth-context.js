import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  

  function authenticate(token) {
    setAuthToken(token);
    setIsAuthenticated(true)
    AsyncStorage.setItem('token', token)
}

function logout() {
    setAuthToken(null);
    setIsAuthenticated(false)
    AsyncStorage.removeItem('token')
  }

  value = {
    token: authToken,
    isAuthenticated: isAuthenticated,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
