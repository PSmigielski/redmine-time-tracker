import React from "react";
import {Outlet} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {UnauthorizedNav} from "../components/atoms/UnauthorizedNav";
import {Nav} from "../components/molecules/Nav";

import "../styles/AppWrapper.css";

export const AppWrapper = () => {
    const authContext = React.useContext(AuthContext);
    return (
        <div className="appWrapper">
            <nav className="appWrapper__nav">{authContext.isAuthorized ? <Nav /> : <UnauthorizedNav />}</nav>
            <section>
                <Outlet />
            </section>
        </div>
    );
};
