function isInternalPath(url) {
  return url.substr(0, 1) === "/";
}

function capitalize(str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function capitalizeEach(str) {
  return str.split(" ").map(capitalize).join(" ");
}

export { capitalize, capitalizeEach, isInternalPath };