<?php
// Datenbankverbindung einbinden
include 'config.php'; // Sicherstellen, dass die Verbindung korrekt ist

// SQL-Abfrage zur Auswahl aller Benutzer
$sql = "SELECT id, username, email FROM users";
$result = pg_query($conn, $sql);

if (!$result) {
    die("Fehler bei der Abfrage: " . pg_last_error($conn));
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Benutzer anzeigen</title>
        <style>
            table {
                width: 50%;
                margin: 20px auto;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f4f4f4;
            }
        </style>
    </head>
    <body>
        <h1>Registrierte Benutzer</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Benutzername</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Ergebnisse der Abfrage ausgeben
                if (pg_num_rows($result) > 0) {
                    while ($row = pg_fetch_assoc($result)) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($row['id']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['username']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='3'>Keine Benutzer gefunden.</td></tr>";
                }

                // Verbindung schließen
                pg_free_result($result);
                pg_close($conn);
                ?>
            </tbody>
        </table>
    </body>
</html>
