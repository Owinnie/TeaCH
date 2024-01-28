import React from "react";
import "./MainScreenComponent.css";
import { Footer } from "../Footer/FooterComponent";
import { Participants } from "../Participants/ParticipantsComponent";

export const MainScreen = () => {
    return (<div className="wrapper">
        <div className="mainScreen"><Participants /></div>
        <div className="footer">
            <Footer />
        </div>
    </div>)
}