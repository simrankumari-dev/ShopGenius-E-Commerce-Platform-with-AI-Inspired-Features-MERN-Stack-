import React, { createContext } from 'react'

export const AuthContext = createContext()

function AuthContextProvider({children}) {  // ← naam badla
    let serverUrl = "https://shopgenius-backend.onrender.com"

    let value = {
      serverUrl
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider  // ← ye bhi badla