function isInternalPath(url) {
  return url.substr(0, 1) === "/";
}

export { isInternalPath };