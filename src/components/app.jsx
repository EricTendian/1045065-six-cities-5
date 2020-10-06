import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "./main";
import Login from "./login";
import Favorites from "./favorites";
import Property from "./property";

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main placesCount={props.placesCount} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/offer/:id?">
        <Property />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired
};

export default App;
