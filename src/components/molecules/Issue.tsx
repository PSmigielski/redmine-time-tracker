import React, {useContext} from "react";
import "../../styles/Issue.css";
import {IssueProgressBar} from "../atoms/IssueProgressBar";
import {IssueType} from "../../types/IssueType";
import {RedmineContext} from "../../context/RedmineContext";

export const Issue = ({id, name, progress, issue}: {id: number, name:string|null, progress: number| null, issue: IssueType}) => {
    const redmineContext = useContext(RedmineContext);
    return(
        <div className="issue" key={id} onClick={() => redmineContext.selectIssue(issue)}>
            <div className={"issue__tagWrapper"}>
                <div className="issue__circle" style={{background: '#FF0000'}}/>
                <p className="issue__paragraph">#{id} - {name}</p>
            </div>
            <IssueProgressBar progress={progress}/>
        </div>);
}