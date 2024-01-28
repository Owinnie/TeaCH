import React from "react";
import "./CardComponent.css";

export const CardComponent = (props) => {
    return <div className="card">{props.children}</div>;
};