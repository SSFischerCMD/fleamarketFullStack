<?php
// Start the session
session_start();

// Include the database configuration
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and retrieve form data
    $email = htmlspecialchars($_POST['email']);
    $userPassword = $_POST['userPassword']; // Do not hash here; compare with the hashed password from DB.

    // Prepare SQL query to fetch the user's hashed password
    $query = "SELECT id, userName, userPassword FROM users WHERE email = $1";
    $result = pg_query_params($conn, $query, [$email]);

    if ($result && pg_num_rows($result) > 0) {
        // Fetch the user's details
        $user = pg_fetch_assoc($result);
        $userName = $user['username'];
        $hashedPassword = $user['userpassword']; // Field names are case-insensitive by default
        $userId = $user['id'];

        // Verify the password
        if (password_verify($userPassword, $hashedPassword)) {
            // Store user information in the session
            $_SESSION['user_id'] = $userId;
            $_SESSION['email'] = $email;
            $_SESSION['userName'] = $userName;

            // Redirect to a protected page
            header("Location: main.php");
            exit;
        } else {
            $error = "Falsches Passwort. Bitte erneut versuchen.";
            echo $error;
        }
    } else {
        $error = "E-Mail nicht gefunden. Bitte registrieren Sie sich.";
        echo $error;
    }

    // Close the database connection
    pg_close($conn);
}
?>
