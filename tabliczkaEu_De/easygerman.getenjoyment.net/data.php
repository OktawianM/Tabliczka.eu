<?php

require_once "connect.php";

$connection = new mysqli($host, $user, $pass, $db) or die ("No connection");
     if( $connection )
     {
          $dbconnect = mysqli_select_db($connection, $db);
          $result = mysqli_query($connection, 'SELECT * FROM words2');
          $dataa = array();

          while($row = mysqli_fetch_assoc($result)){
               $dataa[]=$row;
          }

          echo json_encode($dataa);
     }
     else
     {
          echo "Connection could not be established <br />";
     };

     
?>

