<DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="user.css">
    </head>
    <body id="flexingCenter">
        <h1>Sie haben noch kein Account.</h1>
        <h2>Ihre Daten werden gespeichert und verarbeitet.</h2>
        <!-- hier Code einfügen -->
    <div id='login'>
        <?php
        // Include the database configuration
        include 'config.php';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize and retrieve form data
            $userName = $conn->real_escape_string($_POST['userName']);
            $email = $conn->real_escape_string($_POST['email']);
            $userPassword = $conn->real_escape_string($_POST['userPassword']);

            // Hash the password for security
            $hashedPassword = userPassword_hash($userPassword, PASSWORD_BCRYPT);

            // Prepare the SQL query
            $sql = "INSERT INTO users (userName, email, userPassword) VALUES ('$userName', '$email', '$hashedPassword')";

            // Execute the query
            if ($conn->query($sql) === TRUE) {
                echo "Registration successful!";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            // Close the connection
            $conn->close();
        }
        ?>
    </div>
    <a href="main.html">weiter</a>
    </body>
</html>



<!--
Files and Structure: Create a folder accessible by your server (e.g., inside htdocs or www). Inside this folder, create files like register.php, login.php, and server.php.
Register Form: In register.php, create a form similar to the one above. Handle form submission in server.php.
Login Form: Create a login form (login.php) with fields for username and password. Validate login credentials against the database.
Session Handling: Use PHP sessions to manage user authentication. Restrict certain pages to logged-in users. -->
