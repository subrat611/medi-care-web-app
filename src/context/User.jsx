import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../config/firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    onAuthStateChangedListener((user) => setCurrentUser(user));
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
