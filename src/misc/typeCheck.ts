function typeCheck(_: any, __: any) {
  if (
    _ === undefined ||
    _ === null ||
    _ === "" ||
    _ === 0 ||
    _ === "0" ||
    _ === false ||
    _ === "false"
  ) {
    return __;
  } else {
    return _;
  }
}

export default typeCheck;
