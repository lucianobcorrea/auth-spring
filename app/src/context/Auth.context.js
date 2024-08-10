import { useAuth } from "../hook/useAuth/useAuth.hook";
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);