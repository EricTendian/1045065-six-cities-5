import PropTypes from "prop-types";
import reviewPropType from "./review";

export default PropTypes.shape({
  city: PropTypes.string.isRequired,
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  mark: PropTypes.string,
  photos: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  inside: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    super: PropTypes.bool.isRequired
  }),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired
}).isRequired;
