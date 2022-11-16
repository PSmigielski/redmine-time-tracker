import React from "react";
import "../../styles/Issue.css";

export const Issue = ({id, name}: {id: number, name:string|null}) => {
    return(
        <div className="issue" key={id}>
            <div>
                <div className="issue__circle" style={{background: '#FF0000'}}/>
                <p className="issue__paragraph"><span>#{id}</span> - <span>{name}</span></p>
            </div>
        </div>);
}