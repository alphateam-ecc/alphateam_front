import { createContext,useContext,useState,ReactNode } from "react";

//型定義
type AuthContextType = {
    isLoggedIn:boolean;
    setLoggedIn:(v:boolean) =>void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn:false,
    setLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }:{children :ReactNode}) =>{
    const [isLoggedIn,setLoggedIn] = useState(false);
    return(
        <AuthContext.Provider value={{ isLoggedIn,setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};