import React from "react";
import "../../styles/Issue.css";
import {IssueProgressBar} from "../atoms/IssueProgressBar";

export const Issue = ({id, name, progress}: {id: number, name:string|null, progress: number| null}) => {
    return(
        <div className="issue" key={id}>
            <div className={"issue__tagWrapper"}>
                <div className="issue__circle" style={{background: '#FF0000'}}/>
                <p className="issue__paragraph">#{id} - {name}</p>
            </div>
            <IssueProgressBar progress={progress}/>
        </div>);
}