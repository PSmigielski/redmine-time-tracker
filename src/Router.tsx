import React from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {AppWrapper} from "./views/AppWrapper";
import {AuthProvider} from "./context/AuthContext";

export const Router = () => {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AppWrapper />}></Route>
                    <Route path="/unauthorized" element={<div>unauthorized</div>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
