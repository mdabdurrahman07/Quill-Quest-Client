/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

// eslint-disable-next-line no-undef
export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    const [User , setUser] = useState(null)
    const [loading , setloading] = useState(true)
    const createUser = (email , password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const login = (email , password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logout = () =>{
      return  signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            loading(false)
        })
        return () => 
       {
        return unSubscribe()
       }
    },[loading])
    const values = {
        User,
        loading,
        createUser,
        login,
        logout
    }
    return (
     
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProviders;