<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="..\..\user.css">
    <title>Registrierung</title>
</head>
<body id="flexingCenter">
    <h1>Sie haben noch kein Account.</h1>
    <h2>Ihre Daten werden gespeichert und verarbeitet.</h2>

    <div id="login">
        <form method="POST" action="">
            <label for="userName">Benutzername:</label>
            <input type="text" id="userName" name="userName" required>
            <br><br>

            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required>
            <br><br>

            <label for="userPassword">Passwort:</label>
            <input type="password" id="userPassword" name="userPassword" required>
            <br><br>

            <button type="submit">Registrieren</button>
        </form>

        <?php
        // Include the database configuration
        include 'config.php';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Retrieve and sanitize input
            $userName = htmlspecialchars($_POST['userName']);
            $email = htmlspecialchars($_POST['email']);
            $userPassword = $_POST['userPassword']; // Don't sanitize passwords; hash them directly.

            // Hash the password for security
            $hashedPassword = password_hash($userPassword, PASSWORD_BCRYPT);

            // Prepare SQL query
            $query = "INSERT INTO users (userName, email, userPassword) VALUES ($1, $2, $3)";
            $result = pg_query_params($conn, $query, [$userName, $email, $hashedPassword]);

            // Check if the query was successful
            if ($result) {
                echo "<p>Registrierung erfolgreich!</p>";
            } else {
                echo "<p>Fehler bei der Registrierung: " . pg_last_error($conn) . "</p>";
            }

            // Close the database connection
            pg_close($conn);
        }
        ?>
    </div>
    <a href="..\user_login.html">zum Login</a>
</body>
</html>

