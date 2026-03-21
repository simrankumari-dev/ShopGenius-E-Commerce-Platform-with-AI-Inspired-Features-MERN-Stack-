import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export const UsetDataContext = createContext();

function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(AuthContext);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/user/getcurrentuser",
        { withCredentials: true }
      );
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UsetDataContext.Provider
      value={{ userData, setUserData, getCurrentUser }}
    >
      {children}
    </UsetDataContext.Provider>
  );
}

export default UserContextProvider;
