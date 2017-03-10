'use strict'

function gcd (a, b) {
  let t
  while (b !== 0) {
    t = b
    b = a % b
    a = t
  }
  return a
}

function lcm (a, b) {
  return parseInt(
    Math.abs(a * b) / gcd(a, b), 10)
}

function reduceRatio (a, b) {
  let d = gcd(a, b)
  a = parseInt(a / d, 10)
  b = parseInt(b / d, 10)
  return [a, b]
}

function decimalPlaces (n) {
  function isInt(n){
    return typeof n === 'number' &&
      parseFloat(n) == parseInt(n, 10) && !isNaN(n)
  }

  let a = Math.abs(n)
  let c = a
  let count = 1

  while(!isInt(c) && isFinite(c)){
    c = a * Math.pow(10, count++)
  }

  return count - 1
}

function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && +n === n
}

function powTenToInt(l) {
  let m = Math.max.apply(null, l.map(decimalPlaces))
  return l.map(function (elem) {
    return Math.round(elem * Math.pow(10, m))
  })
}

function Fraction (num = 0, denom = 1, simplify = true) {
  if (denom === 0) {
    throw RangeError("Fraction denominator must be non-zero")
  } else if (!isNumber(num)) {
    throw RangeError("Fraction numerator invalid")
  } else if (!isNumber(denom)) {
    throw RangeError("Fraction denominator invalid")
  }

  [num, denom] = powTenToInt([num, denom])
  if (simplify) {
    [this.num, this.denom] = reduceRatio(num, denom)
  } else {
    this.num = num
    this.denom = denom
  }
}

Fraction.prototype.multiply = function (other) {
  if (other.constructor !== Fraction) {
    other = new Fraction(other)
  }
  let num = this.num * other.num
  let denom = this.denom * other.denom
  return new Fraction(num, denom, true)
}

Fraction.prototype.divide = function (other) {
  if (other.constructor !== Fraction) {
    other = new Fraction(other)
  }
  return this.multiply(other.inverse())
}

Fraction.prototype.inverse = function () {
  return new Fraction(this.denom, this.num, false)
}

Fraction.prototype.negative = function () {
  return new Fraction(-1 * this.num, this.denom)
}

Fraction.prototype.add = function (other) {
  if (other.constructor !== Fraction) {
    other = new Fraction(other)
  }
  let denom = this.denom * other.denom
  let num = this.num * other.denom + other.num * this.denom
  return new Fraction(num, denom, true)
}

Fraction.prototype.subtract = function (other) {
  if (other.constructor !== Fraction) {
    other = new Fraction(other)
  }
  return this.add(other.negative())
}
