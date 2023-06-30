<html>
<head>
<title>Завдання 2 - Результат</title>
</head>
<body>
<h1>Завдання 2 - Результат</h1>
<?php
$a = $_GET['a'];
$b = $_GET['b'];

$sum = $a + $b;
$product = $a * $b;
$diff = $a - $b;
$quotient = $a / $b;

echo "Сума: $sum <br>";
echo "Добуток: $product <br>";
echo "Різниця: $diff <br>";
echo "Частка: $quotient <br>";
?>
</body>
</html>
