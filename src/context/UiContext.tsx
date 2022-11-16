import React, {PropsWithChildren} from "react";

export const UiContext = React.createContext({});

export const UiProvider = ({children}: PropsWithChildren) => {
    return (
        <UiContext.Provider value={{}}>
            {children}
        </UiContext.Provider>
    );
}