import React from "react";
import {IssueList} from "../components/molecules/IssueList";
import {TimerWrapper} from "../components/organisms/TimerWrapper";

export const MainView = () =>{

    return (
        <>
            <IssueList />
            <TimerWrapper />
        </>
    );
}