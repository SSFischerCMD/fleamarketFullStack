<!DOCTYPE html>
<html>
<head>
    <title>Rechnung</title>
</head>
<body>
    <h1>PHP Docker Übung: Rechnung</h1>
    <!-- hier Code einfügen -->
    
    <?php

       
        $numb1 = intval($_GET["numb1"]);
        $numb2 = intval($_GET["numb2"]);
        
        echo "Die eingegebenen Zahlen sind: " . $numb1 . " und ". $numb2 ."<br>";
        
        echo $numb1 . " + " . $numb2 . " = " . $numb1+$numb2 . "<br>";
        echo $numb1 . " - " . $numb2 . " = " . $numb1-$numb2 . "<br>";
        echo $numb1 . " * " . $numb2 . " = " . $numb1*$numb2 . "<br>";
        echo $numb1 . " / " . $numb2 . " = " . $numb1/$numb2 . "<br>";

        
     ?>
</body>
</html>
