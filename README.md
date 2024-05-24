# About

[toPrecision](https://www.npmjs.com/package/toprecision) is a npm module similar to built-in [.toPrecision](https://www.w3schools.com/jsref/jsref_toprecision.asp), but without exponential notation.

toPrecision VS default .toPrecision:

- without exponential notation (eg 1.23e4)
- Both numbers in string ('123') and numbers (123) are supported.

## Installation

In terminal (navigate to your project folder first):

```
npm i toprecision
```

then in your .js file, include this code to start using:

```
import toPrecision from "toprecision"

console.log(toPrecision(0.01234, 3)) // output: 0.0123
```
