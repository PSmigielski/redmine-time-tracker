import React from "react";
import "../../styles/IssueProgressBar.css"

export const IssueProgressBar = ({progress}:{progress: number|null}) => {
    return(<div className={"issueProgressBar"}>
        <div style={{width: `${progress}%`}} className={"issueProgressBar__indicator"}></div>
    </div>)
}