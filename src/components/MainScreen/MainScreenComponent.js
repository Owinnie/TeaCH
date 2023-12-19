import React from "react";
import "./MainScreenComponent.css";
import { Footer } from "../Footer/FooterComponent";

export const MainScreen = () => {
    return (<div className="wrapper">
        <div className="mainScreen"></div>
        <div className="footer">
            <Footer />
        </div>
    </div>)
}