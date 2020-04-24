<?php
session_start();
require_once "connect.php";

$userLogin = $_POST['Login'];
$userPassword = $_POST['Password'];


$connection = new mysqli($host, $user, $pass, $db) or die ("No connection");

if( $connection )
     {

          $sqlQuery = "SELECT*FROM users WHERE userLogin = '$userLogin' AND userPassword = '$userPassword'";

          if($result=$connection->query($sqlQuery)){

          	$users = $result->num_rows;
          	if($users>0){

                    $_SESSION['logged']=true;

                    $row=$result->fetch_assoc(); 
                    $_SESSION['userLogin']=$row['userLogin'];
                    

				header("Location: addWordPage.php"); 
	          	

          	}

          	else{

	          	header("Location: logInPage.php"); 	          	
          }
          	

          }

          

          //while($row = mysqli_fetch_assoc($selectedAll)){
          //     $dataa[]=$row;
          //}

          

         
     }


?>