<?php
// Connecting, selecting database
($dbconn = pg_connect(
    "host=rss-postgres dbname=rss user=student password=geheim"
)) or die("Could not connect: " . pg_last_error());

// init table
$query = "CREATE TABLE IF NOT EXISTS feeds
(
    id uuid not null unique default gen_random_uuid() primary key,
    created_at timestamptz not null default date_trunc('second', current_timestamp),
    updated_at timestamptz not null default date_trunc('second', current_timestamp),

    title TEXT,
    link TEXT,
    description TEXT,
    pubDate TIMESTAMPTZ,
    lastBuildDate TIMESTAMPTZ,
    ttl INT
);";
// reset table
$query .= "TRUNCATE TABLE feeds;";
($result = pg_exec($dbconn, $query)) or die("Query failed: " . pg_last_error());
// add random data to the table
// add 10 rows
for ($i = 0; $i < 10; $i++) {
    $query = "INSERT INTO feeds (title, link, description, pubDate, lastBuildDate, ttl)
    VALUES ('Example Title $i', 'https://example.com/rss/$i', 'description $i', '2021-01-01 00:00:00', '2021-01-01 00:00:00', 1);";
    ($result = pg_exec($dbconn, $query)) or
        die("Query failed: " . pg_last_error());
}

($result = pg_exec($dbconn, $query)) or die("Query failed: " . pg_last_error());

// Performing SQL query
$query = "SELECT * FROM feeds";
($result = pg_query($dbconn, $query)) or
    die("Query failed: " . pg_last_error());

// Printing results in HTML
echo "<table>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// Free resultset
pg_free_result($result);

// Closing connection
pg_close($dbconn);
?>
