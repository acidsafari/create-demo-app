// Aside.js

import React from "react";
import Attractions from "./Attractions";
import Events from "./Events";
import Acommodation from "./Acommodation";

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