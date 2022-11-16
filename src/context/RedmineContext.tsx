import React, {PropsWithChildren, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext";
import {getClient, ResponseType} from '@tauri-apps/api/http';
import {IssueRequestResponseType} from "../types/IssueRequestResponseType";
import {IssueType} from "../types/IssueType";

type RedmineContextType = {
    issues: Array<IssueType>,
    fetchIssues: () => Promise<IssueType[]|undefined>
}
export const RedmineProvider = ({children}: PropsWithChildren) => {
    const [issues, setIssues] = useState<Array<IssueType>>([]);
    const authContext = useContext(AuthContext);
    const fetchIssues = async () => {
        const client = await getClient();
        const {data, status}: {data: IssueRequestResponseType, status: number} =
            await client.get(`${authContext.url}/issues.json?key=${authContext.apiKey}&assigned_to_id=me`,{
                timeout: 30,
                responseType: ResponseType.JSON
            });
        if(status == 200 && data){
            setIssues(data.issues);
            return issues;
        }
        if(status == 401){
            console.error("Sprawdź klucz api czy je git");
        }
    }
    return (<RedmineContext.Provider
        value={{
            issues,
            fetchIssues
        }}
    >
        {children}
    </RedmineContext.Provider>);
}
// @ts-ignore
export const RedmineContext = React.createContext({
    issues: []
} as RedmineContextType);
