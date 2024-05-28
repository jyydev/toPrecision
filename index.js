function toPrecision(val, prec, comma = true) {
  let r = Number(Number(val).toPrecision(prec));
  if (comma) r = r.toLocaleString();
  return r;
}

module.exports = toPrecision;
