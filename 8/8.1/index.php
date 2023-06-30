<!DOCTYPE html>
<html>
<head>
    <title>Суперглобальні змінні PHP</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Суперглобальні змінні PHP</h1>
    <table>
        <tr>
            <th>Позначення змінної</th>
            <th>Характеристика</th>
            <th>Отримане значення</th>
        </tr>
        <tr>
            <td>$GLOBALS</td>
            <td>Загальні змінні, доступні з будь-якого місця в скрипті</td>
            <td><?php var_dump($GLOBALS); ?></td>
        </tr>
        <tr>
            <td>$_SERVER</td>
            <td>Інформація про сервер і оточення</td>
            <td><?php var_dump($_SERVER); ?></td>
        </tr>
        <tr>
            <td>$_GET</td>
            <td>Змінні, передані методом GET</td>
            <td><?php var_dump($_GET); ?></td>
        </tr>
        <tr>
            <td>$_POST</td>
            <td>Змінні, передані методом POST</td>
            <td><?php var_dump($_POST); ?></td>
        </tr>
        <tr>
            <td>$_FILES</td>
            <td>Інформація про завантажені файли</td>
            <td><?php var_dump($_FILES); ?></td>
        </tr>
        <tr>
            <td>$_COOKIE</td>
            <td>Значення cookie</td>
            <td><?php var_dump($_COOKIE); ?></td>
        </tr>
        <tr>
            <td>$_SESSION</td>
            <td>Значення сесії</td>
            <td><?php var_dump($_SESSION); ?></td>
        </tr>
        <tr>
            <td>$_REQUEST</td>
            <td>Змінні, передані методом GET, POST або COOKIE</td>
            <td><?php var_dump($_REQUEST); ?></td>
        </tr>
        <tr>
            <td>$_ENV</td>
            <td>Інформація про середовище</td>
            <td><?php var_dump($_ENV); ?></td>
        </tr>
    </table>
</body>
</html>
