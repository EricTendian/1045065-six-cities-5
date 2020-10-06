import React from "react";
import Main from "./main";
import PropTypes from "prop-types";

const App = (props) => {
  return <Main placesCount={props.placesCount} />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired
};

export default App;
