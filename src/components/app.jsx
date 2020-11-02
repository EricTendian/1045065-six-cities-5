import React from "react";
import {BrowserRouter, Switch, Route, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import offerPropType from "../types/offer";
import Main from "./main";
import Login from "./login";
import Favorites from "./favorites";
import Property from "./property";
import Property404 from "./property-404";

const Offer = (props) => {
  let {id} = useParams();
  id = parseInt(id, 10);
  const offerResults = props.offers.filter((offer) => offer.id === id);

  if (offerResults.length === 1) {
    return <Property offer={offerResults[0]} nearbyOffers={props.offers.slice(0, 3)} />;
  } else {
    // 404 page
    return <Property404 />;
  }
};

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main offers={props.offers} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/favorites">
        <Favorites favorites={props.offers} />
      </Route>
      <Route exact path="/offer/:id?">
        <Offer offers={props.offers} />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

export default App;
