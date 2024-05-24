import eToNum from "from-exponential";

function toPrecision(val, prec) {
  let r = eToNum(Number(val).toPrecision(prec));
  return r;
}

export default toPrecision;
