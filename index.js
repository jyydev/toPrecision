const eToNum = require("from-exponential");
// import eToNum from "from-exponential";
const tt = require("greet-codevolution");

function toPrecision(val, prec) {
  console.log("load to precision");
  tt("bat");
  let r = eToNum(Number(val).toPrecision(prec));
  // let r = "yyy";
  return r;
}

module.exports = toPrecision;
// export default toPrecision;
