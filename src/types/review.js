import PropTypes from "prop-types";

export default PropTypes.shape({
  time: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  text: PropTypes.string.isRequired
});
