import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });
   useEffect(() => {
     const data = localStorage.getItem("auth");
     if (data) {
       const parseData = JSON.parse(data);
       setAuth({
         ...auth,
         user: parseData.user,
         token: parseData.token,
       });
     }
     //eslint-disable-next-line
   }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
