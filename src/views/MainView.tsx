import React from "react";
import {IssueList} from "../components/molecules/IssueList";
import {TimerWrapper} from "../components/organisms/TimerWrapper";
import "../styles/MainView.css";
export const MainView = () =>{
    return (
        <div className="mainView">
            <IssueList />
            <TimerWrapper />
        </div>
    );
}