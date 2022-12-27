import React, {useEffect} from "react";
import {Issue} from "./Issue";
import {RedmineContext} from "../../context/RedmineContext";
import "../../styles/IssueList.css"

export const IssueList = () => {
    const redmineContext = React.useContext(RedmineContext);
    useEffect(()=>{
        redmineContext.fetchIssues();
    }, []);
    return (
        <div className="issueList">
            {redmineContext.issues.map(el => (<Issue id={el.id} name={el.subject} progress={el.done_ratio} issue={el}/>))}
        </div>
    )
}