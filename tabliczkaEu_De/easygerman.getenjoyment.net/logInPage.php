<?php
    session_start();
    echo $_SESSION['userLogin'];
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

     <div class="Container" style="margin-top: 50px;">

      <h3> Login Panel </h3>
      <form action="logMe.php" method="POST">
         <div class="row">
            

                <div class="col-lg-6">   
                  <div id="Word1Displayer">
                    <h4 style="float: right">Login</h4>
                    <br>
                     <input type="text" name="Login" style="border-radius: 10px; border-style: none;width:100%;"> 
                  </div>
                </div>                

                 <div class="col-lg-6">      
                  <div id ="Word2Displayer" style="background-color: #272727; margin-bottom: 90px;">
                    <h4 style="float: right">Password</h4>
                    <br>
                    <input type="Password" name="Password" style="border-radius: 10px; border-style: none; width:100%;">
                  </div>
                </div>
         </div>

                <input type="submit" value="Login" style="margin-top: 20px; float: right; border-radius: 10px; border-style: none; width: 14%; background-color: lightgrey; margin-right: 43%; font-size: 1.5em; font-family: 'Gruppo', sans-serif;min-width: 100px;">  

          </form> 
          <button onclick="window.location.href = 'index.php';"style="margin-top: 20px; float: right; border-radius: 10px; border-style: none; width: 14%; background-color: grey; margin-right: 43%; margin-bottom: 100px; font-size: 1.5em; font-family: 'Gruppo', sans-serif; min-width: 100px;">Back</button>
      
    </div>
  </body>

</html>