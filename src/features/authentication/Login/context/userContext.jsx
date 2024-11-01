import { createContext, useContext, useState } from "react";
// 1.Create Contex
const UserContext = createContext();

// 2.Create Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Export the Context wrapped with useContext
export const useUser = () => useContext(UserContext);
