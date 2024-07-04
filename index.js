function toK(num, comma = 0) {
  if (num >= 1000) {
    num = num / 1000;
    if (comma) return Math.abs(num).toLocaleString() + "k";
    else return num + "k";
  }
  return num;
}

function toPrecision(val, prec, ob = {}) {
  let comma = ob.comma ?? ob.c ?? 0;
  let dollar = ob.dollar ?? ob.d ?? 0;
  let prefix = ob.prefix ?? ob.pre ?? ob.p ?? "";
  let k = ob.k ?? 0;

  let r = Number(Number(val).toPrecision(prec));
  if (!prefix && dollar) prefix = "$";
  let pre = prefix ? (r < 0 ? "-" : "") + prefix : ""; // pre = [+-]+prefix
  if (comma) {
    if (prefix) {
      if (k) r = pre + toK(r, 1);
      else r = pre + Math.abs(r).toLocaleString();
    } else {
      if (k) r = toK(r, 1);
      else r = r.toLocaleString();
    }
  } else {
    if (prefix) {
      if (k) r = pre + toK(Math.abs(r));
      else r = pre + Math.abs(r);
    } else if (k) r = pre + toK(Math.abs(r));
  }
  return r;
}
module.exports = toPrecision;
