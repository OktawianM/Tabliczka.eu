
var wordsToLearn=0;
var wordsObiectArray = [];  



 function connectToDB(){

              
              var ajax = new XMLHttpRequest();
              var method = "GET";
              var url = "data.php";
              var asynchronous = true;    
                     

              ajax.open(method, url, asynchronous);

              //sending ajax request
              ajax.send();

              //receiving response from data.php
              ajax.onreadystatechange=function(){
                if(this.readyState == 4 && this.status == 200)

                {   
                  var answer = 0;
                  var data = JSON.parse(this.responseText); 
                  var i=0;         

                  
                  console.log(data);
                  var length = data.length;                  
                  var html = "";      

                  for(i=0;i<length;i++){
                     wordsObiectArray.push(data[i]);                    
                  }  

                  console.log("array is filled");



                }}              

              }


function changeWordFunction(){

              
                  var length = wordsObiectArray.length-1;  

                  if (length==0){
                    document.getElementById("changeWord").style.display="none";
                  }                
                  var randNumber = Math.floor(Math.random() * length);  
                  console.log("Rand no = " + randNumber);                

                  var DeutchWord = wordsObiectArray[randNumber].wordD;
                  var PolischWord = wordsObiectArray[randNumber].wordPL;      

                  document.getElementById("Word1Displayer").innerHTML = DeutchWord;
                  document.getElementById("Word2Displayer").innerHTML = PolischWord;
                  document.getElementById("wordsCounter").innerHTML = "Remained: " + length+ " words";                   

                  wordsObiectArray.splice(randNumber,1);                       
                                       

}

