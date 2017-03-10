<script src="js/analytics.js"></script>
<script src="js/fraction.js"></script>
<script src="js/circuitry.js"></script>
<link rel="stylesheet" href="css/index.css">

## Equivalent Circuit Calculator

Diagram the parallel/series\* circuit of resistors or capacitors below as a comma-separated list of numbers and arrays. Numbers (integer or decimal) represent resistance or capacitance values. Using nested arrays, you can indicate parallel branches. 

<p>
<form>
    <input type="radio" checked="checked" name="component" value="resistor">&nbsp;Resistor circuit<br>
    <input type="radio" name="component" value="capacitor">&nbsp;Capacitor circuit
</form>
</p>

<textarea id="circuit"></textarea>

<button type="button" value="calculate" id="calculate">Calculate</button>

<p id="solution"></p>

\* For more [complex topologies](https://en.wikipedia.org/wiki/Topology_(electrical_circuits)), you will need a different tool.

---

### Diagram Examples

<img src="img/circuit1.png">

    100, 200, 300

<img src="img/circuit2.png">

    30, [[0.7], [4, 12.5], [10]]

<img src="img/circuit3.png">

    [[3], [2], [1]]

<img src="img/circuit4.png">

    10, [
            [2, [
                    [4], 
                    [8], 
                    [6]
                ]
            ], 
            [1.5], 
            [3]
        ]

<img src="img/circuit5.png">

No can do!

<script src="js/ui.js"></script>
