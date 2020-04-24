<?php
    session_start(); 
      if((!headers_sent()) && (isset($_SESSION['logged']))&&($_SESSION['logged']==true)){
        echo $_SESSION['logged'];
      }

      else{
        header("Location: logInPage.php");   
      }
           
    ?>

<!DOCTYPE html>
<html lang="pl">

  <head>

       <title>Deutch Teacher</title>

       <meta name="description" content="Nauka języka niemieckiego">
       <meta name="keywords" content="Niemiecki, język, nauka">
       <meta name="author" content="Oktawian Mańkowski">

       <meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1"> <!-- Older versions of browser are compatible to -->   
       
       <link href='http://fonts.googleapis.com/css?family=Gruppo&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
       <link rel="stylesheet"href="bootstrap.min.css" type='text/css'>
       <link rel="stylesheet" href="arkusz.css" type='text/css'>
       <script src="script.js"></script>
     

  </head>

  <body>


     <div class="Container">
      <form action="sendWordtoDB.php" method="POST">
         <div class="row">
            

                <div class="col-md-6">   
                  <div id="Word1Displayer">
                    <h4 style="float: right">German word</h4>
                    <br>
                     <input type="text" name="german" style="border-radius: 10px; border-style: none;width:100%;"> 
                  </div>
                </div>                

                 <div class="col-md-6">      
                  <div id ="Word2Displayer">
                    <h4 style="float: right">Polish word</h4>
                    <br>
                    <input type="text" name="polish" style="border-radius: 10px; border-style: none; width:100%;">
                  </div>
                </div>
         </div>

                <input type="submit" value="Add" style="margin-top: 100px; float: right; border-radius: 10px; border-style: none; width: 200px; background-color: lightgrey; margin-right: 50px; font-size: 1.5em; font-family: 'Gruppo', sans-serif;">  

          </form> 
          <button onclick="window.location.href = 'index.php';"style="margin-top: 100px; float: right; border-radius: 10px; border-style: none; width: 200px; background-color: grey; margin-right: 50px; font-size: 1.5em; font-family: 'Gruppo', sans-serif;">Back</button>
      
    </div>
  </body>

</html>