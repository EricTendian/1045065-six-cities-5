import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";
import offerPropType from "../types/offer";

const ReviewList = (props) => {
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{props.offer.reviews.length}</span></h2>
    <ul className="reviews__list">
      {props.offer.reviews.map((review) => {
        return <Review review={review} key={review.id} />;
      })}
    </ul>
    <ReviewForm offer={props.offer} />
  </section>;
};

ReviewList.propTypes = {
  offer: offerPropType
};

export default ReviewList;
