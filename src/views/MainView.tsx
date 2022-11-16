import React, {useEffect} from "react";
import {RedmineContext} from "../context/RedmineContext";
import {Issue} from "../components/molecules/Issue";

export const MainView = () =>{
    const redmineContext = React.useContext(RedmineContext);
    useEffect(()=>{
        redmineContext.fetchIssues();
    }, []);
    return (<div>{redmineContext.issues.map(el => (<Issue id={el.id} name={el.subject} />))}</div>)
}