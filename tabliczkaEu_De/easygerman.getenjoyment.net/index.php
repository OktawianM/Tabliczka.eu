<?php
          session_start();
          if ((!headers_sent()) && (!isset($_SESSION['userLogin']))){
            echo '<a href = "logInPage.php"><img src="Icons/loginIcon.svg" style="margin-right: 20px; width:4%; min-width: 70px; margin-top: 10px;"><h3 style="margin-top: -70px; margin-right: 105px; text-align: right; color: black;  font-weight: bold; "> Log In </h3></a>';
            
          }
          else{
            echo '<img src="Icons/loginIcon.svg" style="margin-right: 140px;  margin-top: 10px; width:4%; min-width: 70px;">';
            echo '<h3 style="margin-top: -70px; margin-right: 230px; text-align: right; color: black;  font-weight: bold; "> '.$_SESSION['userLogin']. '</h3>';
            echo '<a href = "logOutPage.php"><img src="Icons/logoutIcon.svg" style="width:4%; min-width: 70px;  margin-top: -45px; margin-right: 10px;"></a>';
          }  

          ?>

          
<!DOCTYPE html>
<html lang="pl">

  <head>

       
       <title>DEteacher</title>

       <meta name="description" content="Nauka języka niemieckiego">
       <meta name="keywords" content="Niemiecki, język, nauka">
       <meta name="author" content="Oktawian Mańkowski">

       <meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1"> <!-- Older versions of browser are compatible to -->   
       
       <link href='http://fonts.googleapis.com/css?family=Gruppo&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
       <link rel="stylesheet"href="bootstrap.min.css" type='text/css'>
       <link rel="stylesheet" href="arkusz.css" type='text/css'>
       <link rel="icon" href="Icons/SiteIcon.png">   
       <script src="script.js"></script>

       <style>
          a:hover {
           text-decoration: none;
           opacity: 1.0;           
          }
        </style>
     


  </head>

  <body onload="connectToDB()">

    

    <div id="statusField">
      <div id="loginField">  

      </div>
    </div>

     <div class="Container">

      

      <div class="row">

        <div class="col-lg-5">   
          <div id="Word1Displayer"></div>
        </div>

        <div class="col-lg-2">      

          <div id="changeWord">
            <a onclick="changeWordFunction()" href="#"><img src="Icons/changeWordIcon.svg" style="width: 80%; max-height: 150px;"></a>         
          </div>

          <div id="addWord">
            <a href="addWordPage.php"><img src="Icons/addIcon.svg" style="width: 80%; max-height: 150px;"></a>         
          </div>

          <div id ="changeIconDisplayer" >
             <a onclick="changeWordFunction()" href="#"><img src="Icons/braingrey.svg" style="width: 80%; max-height: 150px;"></a>         
          </div>
        </div>

         <div class="col-lg-5">      
          <div id ="Word2Displayer"></div>
        </div>

      </div>

      
        <div id="wordsCounter"></div>
        


    </div>
  </body>

</html>