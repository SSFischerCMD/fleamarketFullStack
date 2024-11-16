<!DOCTYPE html>
<html>
<head>
    <title>PHP Docker Übung 1</title>
</head>
<body>
    <h1>PHP Docker Übung 1</h1>
    <!-- hier Code einfügen -->
    
    <?php
        echo "name: " .  $_POST["username"] . "<br>";
        echo "email: " . $_POST["email"]. "<br>";
        echo "message: " . $_POST["message"]. "<br>";
     ?>
</body>
</html>
