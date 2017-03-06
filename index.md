<script src="js/analytics.js"></script>
<script src="js/circuitry.js"></script>
<link rel="stylesheet" href="css/index.css">

## Equivalent Resistance Calculator

Diagram the parallel/series\* circuit of resistors below as a comma-separated list of numbers and arrays. Numbers (integer or decimal) represent resistance values. Using nested arrays, you can indicate parallel branches. 

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
            [1], 
            [3]
        ]

<img src="img/circuit5.png">

No can do!

<script src="js/ui.js"></script>
