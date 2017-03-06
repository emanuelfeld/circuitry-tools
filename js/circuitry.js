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


function equivalentCircuit(c, component) {
    var parallel = false;
    var series = false;

    if (c.constructor == Number | Number(c)) {
        return Number(c);
    } else if (c.constructor == Array && c.every(isArray)) {
        parallel = true;
    } else {
        series = true;
    }
    
    
    if (series && component == 'resistor' || parallel && component == 'capacitor') {
        return c.map(function(elem) {
            return equivalentCircuit(elem, component);
        }).reduce(adder, 0);
    } else {
        return 1 / c.map(function(elem) {
            return 1 / equivalentCircuit(elem, component);
        }).reduce(adder, 0);        
    }
}
