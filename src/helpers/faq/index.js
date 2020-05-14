import PropTypes from "prop-types";

const sectionsPropType = PropTypes.arrayOf(PropTypes.exact({
  group: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired // TODO: update when FAQ page is worked on
}));

export { sectionsPropType }