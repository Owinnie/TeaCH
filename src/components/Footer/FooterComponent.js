import React from "react";
import "./FooterComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faDesktop, faDotCircle, faGamepad, faMicrophone, faVideo } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (<div className="footer">
        <div className="controls">
            <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div className="controls">
            <FontAwesomeIcon icon={faVideo} />
        </div>
        <div className="controls">
            <FontAwesomeIcon icon={faDesktop} />
        </div>
        <div className="controls">
            <FontAwesomeIcon icon={faDotCircle} />
        </div>
        <div className="controls">
            <FontAwesomeIcon icon={faGamepad} />
        </div>
        <div className="controls chat">
            <FontAwesomeIcon icon={faComments} />
        </div>
    </div>)
}