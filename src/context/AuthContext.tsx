import React, {PropsWithChildren, useEffect, useState} from "react";
import * as localforage from "localforage";
import {redirect, useNavigate} from "react-router-dom";

export const AuthContext = React.createContext({apiKey: "", isAuthorized:false});

export const AuthProvider = ({children}: PropsWithChildren) => {
    const navigate = useNavigate();
    const [apiKey, setApiKey] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const initAuth = async () =>{
        try{
            const key = await localforage.getItem("apiKey");
            if(key == null){
                navigate("/unauthorized");
            }else{
                setApiKey(key as string);
                setIsAuthorized(true);
            }
        }catch (e){
            console.log(e);
        }
    }
    const authorize = async (apiKey: string) => {
        try{
            if(apiKey.length < 40 || apiKey.length > 40) return false;
            await localforage.setItem("apiKey", apiKey);
            setApiKey(apiKey);
        }catch (e){
            console.log(e);
        }
    }
    useEffect(()=>{
        initAuth();
    },[]);
    return (<AuthContext.Provider
        value={{
            apiKey,
            isAuthorized
        }}
    >
        {children}
    </AuthContext.Provider>);
}