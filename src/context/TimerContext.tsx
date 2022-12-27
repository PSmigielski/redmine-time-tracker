import React, {PropsWithChildren, useState} from "react";


type TimerContextType = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
export const TimerContext = React.createContext({isActive: false} as TimerContextType);

export const TimerProvider = ({children}: PropsWithChildren) => {
    const [isActive, setIsActive] = useState(true)
    return <TimerContext.Provider value={{
        isActive,
        setIsActive
    }}>{children}</TimerContext.Provider>
}