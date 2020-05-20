function isInternalPath(url) {
  return url.substr(0, 1) === "/";
}

function validate(type, value = "") {
  if (type === "email") {
    const result = value.match(/\S+@\S{2,}\.\S{2,3}/);

    if (!result) return false;

    if (result.length) {
      return !!result[0].length;
    }
  }

  return false;
}

export { isInternalPath, validate };