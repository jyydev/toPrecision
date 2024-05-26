function toPrecision(val, prec) {
  let r = Number(Number(val).toPrecision(prec));
  return r;
}

module.exports = toPrecision;
