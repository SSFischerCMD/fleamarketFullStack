<?php
session_start();
session_destroy(); // Destroy all session data
header("Location: ..\user_login.html"); // Redirect to login page
exit;
?>
