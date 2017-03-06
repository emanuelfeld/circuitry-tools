function adder(acc, val) {
    return acc + val;
}


function isArray(element, index, array) {
    return element.constructor == Array;
}


function isValidCircuit(c) {
    if (c.constructor == Number | Number(c)) {
        if (c <= 0) {
            return false;
        } else {
            return true;
        }
    } else if (c.constructor == Array) {
        if (c.length == 0) {
            return false;
        }
        return c.every(isValidCircuit);
    } else {
        return false;
    }
}


function equivalentResistance(c) {
    if (c.constructor == Number | Number(c)) {
        return Number(c);
    } else if (c.constructor == Array && c.every(isArray)) {
        return 1 / c.map(function(elem) {
            return 1 / equivalentResistance(elem);
        }).reduce(adder, 0);
    } else {
        return c.map(function(elem) {
            return equivalentResistance(elem);
        }).reduce(adder, 0);
    }
}
