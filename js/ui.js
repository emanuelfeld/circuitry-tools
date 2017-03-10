var button = document.getElementById('calculate')
button.addEventListener('click', calculateResistance)

function calculateResistance () {
  var component = document.querySelector('input[name="component"]:checked').value
  
  try {
    var input = document.getElementById('circuit').value
    var circuit = JSON.parse('[' + input + ']')

    if (isValidCircuit(circuit)) {
      var result_frac = equivalentCircuit(circuit, component)
      var result;
      if (result_frac.denom === 1) {
        result = result_frac.num;
      } else {
        result = result_frac.num + ' / ' + result_frac.denom
      }
      var unit = (component === 'resistor') ? 'Ω' : 'F'

      document.getElementById('solution').textContent = '<strong>Result</strong> <pre>' + result + ' ' + unit + '</pre>'
      return
    }
  } catch (e) {}

  document.getElementById('solution').textContent = '<pre>Invalid circuit</pre>'
}
