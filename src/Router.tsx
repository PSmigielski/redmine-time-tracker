import React from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {AppWrapper} from "./views/AppWrapper";
import {AuthProvider} from "./context/AuthContext";
import {UnauthorizedView} from "./views/UnauthorizedView";
import {RedmineProvider} from "./context/RedmineContext";
import {UiProvider} from "./context/UiContext";
import {MainView} from "./views/MainView";
import {TimerProvider} from "./context/TimerContext";

export const Router = () => {
    return(
        <BrowserRouter>

                <UiProvider>
                    <AuthProvider>
                        <TimerProvider>
                            <RedmineProvider>
                                <Routes>
                                    <Route path="/" element={<AppWrapper />}>
                                        <Route path="/app" element={<MainView />} index/>
                                        <Route path="/unauthorized" element={<UnauthorizedView />}/>
                                    </Route>
                                </Routes>
                            </RedmineProvider>
                        </TimerProvider>
                    </AuthProvider>
                </UiProvider>
        </BrowserRouter>
    )
}
