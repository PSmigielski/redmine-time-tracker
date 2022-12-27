import React, {useContext} from "react";
import "../../styles/TimerButton.css";
import {TimerContext} from "../../context/TimerContext";
export const TimerButton = () => {
    const timerContext = useContext(TimerContext);
    return (
        <div className={timerContext.isActive ? "timerButtonBackground timerButtonBackground--active" : "timerButtonBackground"}>
            <div className={timerContext.isActive ? "timerButtonIndicator--inactive" : "timerButtonIndicator"}></div>
        </div>);
}