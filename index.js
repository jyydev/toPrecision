function toPrecision(val, prec, { comma, dollar, prefix }) {
  if (typeof comma === "undefined") comma = 1;
  if (typeof dollar === "undefined") dollar = 0;
  if (typeof prefix === "undefined") prefix = "";

  let r = Number(Number(val).toPrecision(prec));
  if (!prefix && dollar) prefix = "$";
  let pre = prefix ? (r < 0 ? "-" : "") + prefix : "";
  if (comma) {
    r = prefix ? pre + Math.abs(r).toLocaleString() : r.toLocaleString();
  } else {
    if (prefix) r = pre + Math.abs(r);
  }
  return r;
}

module.exports = toPrecision;
