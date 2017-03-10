'use strict'

function adder (acc, val) {
//   return acc + val
  return acc.add(val)
}

function isArray (element, index, array) {
  return element.constructor === Array
}

function isValidCircuit (c) {
  if (c.constructor === Number | Number(c)) {
    if (c <= 0) {
      return false
    } else {
      return true
    }
  } else if (c.constructor === Array) {
    if (c.length === 0) {
      return false
    }
    return c.every(isValidCircuit)
  } else {
    return false
  }
}

function equivalentCircuit (c, component) {
  let parallel = false
  let series = false

  if (c.constructor === Number || Number(c)) {
    return new Fraction(Number(c))
  } else if (c.constructor === Fraction) {
    return c
  } else if (c.constructor === Array && c.every(isArray)) {
    parallel = true
  } else {
    series = true
  }

  if (series && component === 'resistor' || parallel && component === 'capacitor') {
    return c.map(function (elem) {
      return equivalentCircuit(elem, component)
    }).reduce(adder, new Fraction(0, 1, false))
  } else {
    return c.map(function (elem) {
      return equivalentCircuit(elem, component).inverse()
    }).reduce(adder, new Fraction(0, 1, false)).inverse()
  }
}
