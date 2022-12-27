import React, {useContext} from "react";
import sync from "../../assets/sync.svg";
import {SearchBar} from "../atoms/SearchBar";
import "../../styles/Nav.css"
import {RedmineContext} from "../../context/RedmineContext";

export const Nav = () => {
    const redmineContext = useContext(RedmineContext)
    return (<div className="nav">
        <img src={sync} alt={"sync"} className={"sync"} onClick={() => redmineContext.fetchIssues()}/>
        <SearchBar />
    </div>)
}