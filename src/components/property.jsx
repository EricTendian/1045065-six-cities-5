import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import offerPropType from "../types/offer";
import Map from "./map";
import ReviewList from "./review-list";
import OfferList from "./offer-list";

const Property = (props) => {
  const {offer} = props;
  return <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.photos.map((photo, index) => {
              return <div className="property__image-wrapper" key={index}>
                <img className="property__image" src={photo.src} title={photo.title} alt="Photo studio" />
              </div>;
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.mark && <div className="property__mark">
              <span>{offer.mark}</span>
            </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.name}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: offer.rating * 20 + `%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.adults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.inside.map((item, index) => {
                  return <li className="property__inside-item" key={index}>
                    {item}
                  </li>;
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.host.super ? `property__avatar-wrapper--pro` : ``}`}>
                  <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
              </div>
              <div className="property__description">
                {offer.description}
              </div>
            </div>
            <ReviewList offer={offer} />
          </div>
        </div>
        <section className="property__map map">
          <Map offers={props.nearbyOffers} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OfferList offers={props.nearbyOffers} listClassPrefix="near-places__list" cardClassPrefix="near-places__card" />
        </section>
      </div>
    </main>
  </div>;
};

Property.propTypes = {
  offer: offerPropType,
  nearbyOffers: PropTypes.arrayOf(offerPropType).isRequired
};

export default Property;
