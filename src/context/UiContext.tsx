import React, {PropsWithChildren, useState} from "react";
import {isBooleanObject} from "util/types";

type UiContextType = {
    isTimerWrapperExtended: boolean,
    setIsTimerWrapperExtended:  React.Dispatch<React.SetStateAction<boolean>>
}
export const UiContext = React.createContext({isTimerWrapperExtended: false} as UiContextType);

export const UiProvider = ({children}: PropsWithChildren) => {
    const [isTimerWrapperExtended, setIsTimerWrapperExtended] = useState(false);
    return (
        <UiContext.Provider value={{
            isTimerWrapperExtended,
            setIsTimerWrapperExtended
        }}>
            {children}
        </UiContext.Provider>
    );
}