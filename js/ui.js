var button = document.getElementById('calculate');
button.addEventListener('click', calculateResistance);

function calculateResistance() {

    try {
      var input = document.getElementById("circuit").value;
      var circuit = JSON.parse("[" + input + "]");
      if (isValidCircuit(circuit)) {
        var result = equivalentResistance(circuit);
        document.getElementById("solution").textContent = 'Result: ' + result + ' Ω';
        return;
      } 
    } catch (e) {}

    document.getElementById("solution").textContent = 'Invalid circuit';

}
