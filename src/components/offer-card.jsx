import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import offerPropType from "../types/offer";

const OfferCard = (props) => {
  const offer = props.offer;

  const classPrefix = props.classPrefix;

  return <article className={`${classPrefix} place-card`} onMouseEnter={props.onHover} onMouseLeave={props.onHover}>
    {offer.mark && <div className="place-card__mark">
      <span>{offer.mark}</span>
    </div>}
    <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.photos[0].src} width="260" height="200" title={offer.photos[0].title} alt="Place image" />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rating * 20 + `%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: offerPropType,
  classPrefix: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired
};

export default OfferCard;
