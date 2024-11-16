<?php
// Database configuration
$host = 'postgres'; // Docker service name for PostgreSQL
$username = 'student'; // POSTGRES_USER
$password = 'geheim'; // POSTGRES_PASSWORD
$dbname = 'rss'; // POSTGRES_DB

// Connect to PostgreSQL using pg_connect
$conn = pg_connect("host=$host dbname=$dbname user=$username password=$password");

// Check connection
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}