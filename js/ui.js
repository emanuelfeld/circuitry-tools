var button = document.getElementById('calculate');
button.addEventListener('click', calculateResistance);

function calculateResistance() {

    var component = document.querySelector('input[name="component"]:checked').value;
    console.log(component);
    try {
      var input = document.getElementById('circuit').value;
      var circuit = JSON.parse('[' + input + ']');
      if (isValidCircuit(circuit)) {
        var result = equivalentCircuit(circuit, component);
        var unit = input == 'resistor' ? 'Ω' : 'F';
        document.getElementById('solution').textContent = 'Result: ' + result + ' ' + unit;
        return;
      } 
    } catch (e) {}

    document.getElementById('solution').textContent = 'Invalid circuit';

}
