<?php

require_once "connect.php";

$connection = new mysqli($host, $user, $pass, $db) or die ("No connection");
     if( $connection )
     {

          $germanWord = $_POST['german'];
          $polishWord = $_POST['polish'];

          $dbconnect = mysqli_select_db($connection, $db);
          $selectedAll = mysqli_query($connection, 'SELECT * FROM words2');
          $dataa = array();
          $result = mysqli_query($connection, "INSERT INTO words2(wordD, wordPL) VALUES ('$germanWord','$polishWord')");
         
          header("Location: index.php"); 
         
     }

     else
     {
          echo "Connection could not be established.<br />";
     };

     
?>

