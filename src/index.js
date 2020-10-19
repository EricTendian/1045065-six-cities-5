import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import offers from "./mocks/offers";

const placesCount = offers.length;

ReactDOM.render(
    <App placesCount={placesCount} offers={offers} />,
    document.getElementById(`root`)
);
