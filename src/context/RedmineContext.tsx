import React, {PropsWithChildren, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext";
import {getClient, ResponseType} from '@tauri-apps/api/http';
import {IssueRequestResponseType} from "../types/IssueRequestResponseType";
import {IssueType} from "../types/IssueType";
import {useFieldArray} from "react-hook-form";
import {isSet} from "util/types";
import localforage from "localforage";
import {isSymbol} from "util";

type RedmineContextType = {
    issues: Array<IssueType>,
    fetchIssues: () => Promise<IssueType[]|undefined>
    selectIssue: (issue: IssueType) => Promise<void>
    selectedIssue: IssueType|undefined
}
export const RedmineProvider = ({children}: PropsWithChildren) => {
    const [issues, setIssues] = useState<Array<IssueType>>([]);
    const [selectedIssue, setSelectedIssue] = useState<IssueType|undefined>(undefined);
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
            const issue = await localforage.getItem("issue");
            if(typeof issue == "string"){
                await selectIssue(JSON.parse(issue))
            }
            return issues;
        }
        if(status == 401){
            console.error("Sprawdź klucz api czy je git");
        }
    }
    const selectIssue = async (issue: IssueType) => {
        setSelectedIssue(issue);
        const issueJson = JSON.stringify(issue);
        await localforage.setItem("issue", issueJson);
    }
    return (<RedmineContext.Provider
        value={{
            issues,
            fetchIssues,
            selectIssue,
            selectedIssue
        }}
    >
        {children}
    </RedmineContext.Provider>);
}
// @ts-ignore
export const RedmineContext = React.createContext({
    issues: []
} as RedmineContextType);
