import React from "react";
import {BrowserRouter, Switch, Route, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./main";
import Login from "./login";
import Favorites from "./favorites";
import Property from "./property";

const Offer = (props) => {
  let {id} = useParams();
  id = parseInt(id, 10);
  const offerResults = props.offers.filter((offer) => offer.id === id);

  if (offerResults.length === 1) {
    return <Property offer={offerResults[0]} />;
  } else {
    return <div><p>Sorry, we could not find that offer</p></div>;
  }
};

Offer.propTypes = {
  offers: PropTypes.array.isRequired
};

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main placesCount={props.placesCount} offers={props.offers} />
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
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
