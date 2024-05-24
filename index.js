const eToNum = require("from-exponential");

function toPrecision(val, prec) {
  let r = eToNum(Number(val).toPrecision(prec));
  return r;
}

module.exports = toPrecision;
