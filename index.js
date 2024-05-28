function toPrecision(val, prec, ob = {}) {
  let comma = ob.comma || 1;
  let dollar = ob.dollar || 0;
  let prefix = ob.prefix || "";

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
