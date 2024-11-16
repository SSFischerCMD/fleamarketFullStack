<?php
    session_start();

    // Check if the user is logged in
    if (!isset($_SESSION['user_id'])) {
        header("Location: ..\user_login.html"); // Redirect to login page if not logged in
        exit;
    }

    // Ensure `userName` is defined before using it
    $userName = isset($_SESSION['userName']) ? htmlspecialchars($_SESSION['userName']) : "Gast";
?>
<!DOCTYPE html>
<html>
    <head>       

        <link rel="stylesheet" href="..\user.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
        </head>
    <body>      
        <header>
            <?php 
                echo "Willkommen, " . $userName . "!";
                echo "<br><a href='logout.php'>Abmelden</a>";
            ?>
        </header>
        <nav>
            <div class="flexContainer">
                <a class="articleButton" href="">my studies</a>
                <a class="articleButton" href="..\testingJS.html">my work</a>
                <a class="articleButton" href="">my expertise</a>
                <a class="articleButton" href="">my hobies</a>
            </div>
        </nav>
        <main>
            <p>
            Enthält zwei Blogbeiträge. Jeder Beitrag sollte in einem 'Article'-Element liegen und eine Überschrift und einen 
            kurzen Absatz Text enthalten.
            </p>
        </main>
        <footer>
            <p>
                Enthält Informationen zum Urheberrecht und vielleicht Links zu den Datenschutzbestimmungen / Impressum.
            </p>
        </footer>
        <script src="..\js\main.JS">
        </script>  
    </body>
</html>
