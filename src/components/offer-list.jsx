import React from "react";
import PropTypes from "prop-types";
import OfferCard from "./offer-card";

const OfferList = (props) => {
  return <div className="cities__places-list places__list tabs__content">
    {props.offers.map((offer, index) => {
      return <OfferCard key={index} offer={offer} onHover={() => true} />;
    })}
  </div>;
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OfferList;
