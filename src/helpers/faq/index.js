import PropTypes from "prop-types";

const sectionsPropType = PropTypes.arrayOf(
  function (value, key, component, location, propName) {
    /* Enforce the following:
      1. value is an array
      2. each element is an object with a 'group': string and items: []
    */

    if (!Array.isArray(value)) {
      return new Error("The 'sections' prop should be an array");
    }

    if (value.forEach) {

      for (const obj of value) {
        const keys = Object.keys(obj);

        if (!keys.includes("group") || !keys.includes("items")) {
          return new Error("The 'sections' prop's array should have a 'group' and 'items' properties");
        }

        if (typeof obj.group !== "string") {
          return new Error("The 'group' property should be a string");
        }

        if (!Array.isArray(obj.items)) {
          return new Error("The 'items' property should be an array")
        }
      }
    }

    return null;
  }).isRequired

export { sectionsPropType }