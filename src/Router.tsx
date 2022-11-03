import React from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {AppWrapper} from "./views/AppWrapper";
import {AuthProvider} from "./context/AuthContext";
import {UnauthorizedView} from "./views/UnauthorizedView";

export const Router = () => {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AppWrapper />}>
                        <Route path="/app" element={<div>authorized</div>} index/>
                        <Route path="/unauthorized" element={<UnauthorizedView />}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
