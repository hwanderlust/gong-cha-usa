function isInternalPath(url) {
  return url.substr(0, 1) === "/";
}

/**
 * Takes a callback to be invoked with an event's target's value, like for text inputs
 */
function callWithEventTargetValue(callback) {
  return (event) => callback(event.target.value);
}

export {
  callWithEventTargetValue,
  isInternalPath
};