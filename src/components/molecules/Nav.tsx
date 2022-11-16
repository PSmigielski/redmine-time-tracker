import React from "react";
import arrow from "../../assets/arrow.svg";
import {SearchBar} from "../atoms/SearchBar";
import "../../styles/Nav.css"

export const Nav = () => {
    return (<div className="nav">
        <img src={arrow} alt={"arrow"} />
        <SearchBar />
    </div>)
}