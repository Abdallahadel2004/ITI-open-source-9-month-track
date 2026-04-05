<?php
echo "welcome to php"."<br>";
$y = "welcome";
$z = "True";
echo gettype($y) . "<br>";
echo gettype($z) . "<br>";

echo "isset(y): " . (isset($y) ? "yes" : "no") . "<br>";
echo "isset(z): " . (isset($z) ? "yes" : "no") . "<br>";

echo "empty(y): " . (empty($y) ? "yes" : "no") . "<br>";
echo "empty(z): " . (empty($z) ? "yes" : "no") . "<br>";



echo "Method 1 (for): ";
for ($i = 0; $i <= 15; $i++) echo "$i ";
echo "<br>Method 2 (while): ";
$i = 0; while ($i <= 15) { echo "$i "; $i++; }

define("INSTITUTE", "ITI");
echo "<h4>Task 5: Constant</h4>";
echo "Value: " . INSTITUTE . "<br>";

$m = 25; $n = 30; $result = $m + $n;
echo "m($m) + n($n) = $result <br>";
if ($result > 50) echo "Accepted"; else echo "Not accepted";


echo "<h4>Task 10: Salary Table</h4>";
echo "<table border='1'>";
echo "<tr><td style='color:blue'>Salary of Mr. Abdallah is</td><td>1000$</td></tr>";
echo "<tr><td style='color:blue'>Salary of Mr. Bahaa is</td><td>1200$</td></tr>";
echo "<tr><td style='color:blue'>Salary of Mr. Cici is</td><td>1400$</td></tr>";
echo "</table>";

function numberToString($num) {
    return (string)$num;
}
echo "<h4>Bonus: numberToString</h4>";
echo "Result of numberToString(123): " . numberToString(123);

?>