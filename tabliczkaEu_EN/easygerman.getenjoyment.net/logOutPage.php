<?php

session_start();
$_SESSION['logged']=false;
unset($_SESSION["userLogin"]);  
header("Location: index.php");

?>