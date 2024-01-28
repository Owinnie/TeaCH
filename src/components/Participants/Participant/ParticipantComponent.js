import React from "react";
import "./ParticipantComponent.css";

import { CardComponent } from "../../Shared/Card/CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

export const Participant = ({ participant }) => {
    return (<div className="participant">
        <CardComponent>
            <video className="video" autoPlay playsInline></video>
            <FontAwesomeIcon icon={faMicrophoneSlash} className="muted" />
            <div style={{ background: participant.avatarColor }} className="avatar">{participant.userName[0]}</div>
            <div className="name">
            {participant.userName}
            {participant.currentUser ? " (You)" : ""}
            </div>
        </CardComponent>
    </div>);
}