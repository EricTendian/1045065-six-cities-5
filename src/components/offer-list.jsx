import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "./offer-card";
import offerPropType from "../types/offer";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };
  }

  render() {
    return <div className="cities__places-list places__list tabs__content">
      {this.props.offers.map((offer) => {
        return <OfferCard key={offer.id} offer={offer}
          onHover={(event) => this.setState({activeOffer: event.type === `mouseenter` ? offer : null})}/>;
      })}
    </div>;
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

export default OfferList;
