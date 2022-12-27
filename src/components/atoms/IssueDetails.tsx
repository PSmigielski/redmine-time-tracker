import React, {useContext} from "react";
import {UiContext} from "../../context/UiContext";
import "../../styles/IssueDetails.css";
interface IssueDetailsPropsType {
    tag: number | undefined ,
    subject: string | null | undefined,
    description: string | null | undefined
}
export const IssueDetails = ({tag, subject, description}:IssueDetailsPropsType) => {
    const uiContext = useContext(UiContext);
    return (
        <div className={"issueDetails" }>
            <p className={!uiContext.isTimerWrapperExtended ? "issueDetails__subject issueDetails__subject--shortened" : "issueDetails__subject"}>#{tag} - {subject}</p>
            {uiContext.isTimerWrapperExtended && <p className={"issueDetails__description"}>{description}</p>}
        </div>);
}