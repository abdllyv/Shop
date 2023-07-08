import { createContext, useState } from "react";

export const Auth = createContext();

export const Validation = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(false);



  const globalStates = {
    user,
    setUser,
    token,
    setToken,
  };
  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
