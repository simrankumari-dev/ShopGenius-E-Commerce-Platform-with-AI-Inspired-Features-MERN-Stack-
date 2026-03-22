import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  let serverUrl = "https://shopgenius-backend.onrender.com"

  return (
    <AuthContext.Provider value={{ serverUrl }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
