<?php
// config.php
$host = "localhost";
$username = "root";
$password = "binbin003"; // Replace with your database password
$dbname = "registration";

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
