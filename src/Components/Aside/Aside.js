import React from "react";
import Attractions from "./Attractions";
import Events from "./Events";
import Acommodation from "./Acommodation";
import './Aside.css';

const Aside = () => {
    return (
        <div className="AsideSection">
            <Attractions />
            <Events />
            <Acommodation />
        </div>
    );
};

export default Aside;