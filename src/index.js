import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import offers from "./mocks/offers";

ReactDOM.render(
    <App offers={offers} />,
    document.getElementById(`root`)
);
