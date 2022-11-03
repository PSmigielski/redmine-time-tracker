import React from "react";
import {Outlet} from "react-router-dom";

export const AppWrapper = () => {
    return (
        <div>
            <nav>
                test2
            </nav>
            <section>
                <Outlet />
            </section>
        </div>
    );
};
