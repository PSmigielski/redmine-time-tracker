import React, {useContext} from "react";
import "../../styles/TimerWrapper.css";
import {IssueDetails} from "../atoms/IssueDetails";
import {RedmineContext} from "../../context/RedmineContext";
import {TimerButton} from "../atoms/TimerButton";

export const TimerWrapper = () => {
    const redmineContext = useContext(RedmineContext);
    return(
        <div className="timerWrapper">
            <IssueDetails
                tag={redmineContext.selectedIssue?.id}
                subject={redmineContext.selectedIssue?.subject}
                description={redmineContext.selectedIssue?.description}
            />
            <div>
                <div>
                    <TimerButton />
                </div>
            </div>
        </div>
    );
}