import React, {PropsWithChildren, useContext, useEffect, useState} from "react";
import * as localforage from "localforage";
import {redirect, useNavigate} from "react-router-dom";
import {AuthContextType} from "../types/AuthContextType";
import {RedmineContext} from "./RedmineContext";

export const AuthProvider = ({children}: PropsWithChildren) => {
    const navigate = useNavigate();
    const [apiKey, setApiKey] = useState("");
    const [url, setUrl] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const initAuth = async () =>{
        try{
            const key = await localforage.getItem("apiKey");
            const url = await localforage.getItem("url");
            if(key == null || url == null){
                navigate("/unauthorized");
            }else{
                setApiKey(key as string);
                setUrl(url as string);
                setIsAuthorized(true);
                navigate("/app");
            }
        }catch (e){
            console.log(e);
        }
    }
    const authorize = async (apiKey: string, url: string) => {
        try{
            if((apiKey.length < 40 || apiKey.length > 40) || !url) return false;
            await localforage.setItem("apiKey", apiKey);
            await localforage.setItem("url", url);
            setApiKey(apiKey);
            setUrl(url);
            setIsAuthorized(true);
            navigate("/app");
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
            isAuthorized,
            url,
            authorize
        }}
    >
        {children}
    </AuthContext.Provider>);
}
export const AuthContext = React.createContext({
    apiKey: "",
    isAuthorized:false,
} as AuthContextType);
