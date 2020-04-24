
var numerOfSlide = 1;
var material = 0;
var picture =0;
var TimerIn=0;
var TimerOut=0;
var actualSlide=0;
var sliderFunctionEnable=0;
var lastDisplayedSlide=1;
var preisForMaterial=0;
var preisForMarking=0;

function materialId() {				
				return actualSlide;
			};
			
function lastMaterialId() {	

				if(actualSlide==0)	{
					return 6;
				}		

				else{
					return actualSlide-1;
				}			

			};



//counting the costs 
function costsCounter(){

	var plate = {
		allPreis: 0,
		preisForMaterial: 0,
		material: document.getElementById("material").value,
		thickness: document.getElementById("thickness").value,
		height: Math.abs(document.getElementById("height").value),
		width: Math.abs(document.getElementById("width").value),
		quantity: Math.abs(document.getElementById("quantity").value),
		uvSize: Math.abs(document.getElementById("uvSize").value),
		engraveSize: Math.abs(document.getElementById("engraveSize").value),
		engraveCosts: 0.1,
		uvCosts: 0.1
	};

	

	
// BRASS

	if(plate.material=='Messing'){

		//mosiadz szczotkowany, lakierowany			
		if(plate.thickness=="0.5"){
			preisForCentimeterMaterial = 0.43; //preis for 1cm2			
		}

	   //mosiadz szczotkowany, lakierowany	
		else if(plate.thickness=="1.3"){
			preisForCentimeterMaterial = 0.53;			
		}

		//mosiadz naturalny
		else if(plate.thickness=="1.5"){
			preisForCentimeterMaterial = 0.45; 			
		}

		//mosiadz naturalny	
		else if(plate.thickness=="2"){
			preisForCentimeterMaterial = 0.47;			
		}		

		else {
			console.log("Wrong brass thickness is choosed");
		}		
	}

//STEINLESS STEEL

	else if(plate.material=='rostfreier Stahl'){

		
		if(plate.thickness=="0.5"){
			preisForCentimeterMaterial = 0.25; //preis for 1cm2			
		}

		else if(plate.thickness=="1"){
			preisForCentimeterMaterial = 0.25;			
		}

		else if(plate.thickness=="1.5"){
			preisForCentimeterMaterial = 0.27; 	
		}

		else if(plate.thickness=="2"){
			preisForCentimeterMaterial = 0.30;			
		}		

		else {
			console.log("Wrong steel thickness is choosed");
		}		
	}

//LAMINAT

		else if(plate.material=='Laminat'){

		
		if(plate.thickness=="0.2"){
			preisForCentimeterMaterial = 0.10; //preis for 1cm2			
		}

		else if(plate.thickness=="0.8"){
			preisForCentimeterMaterial = 0.10;			
		}

		else if(plate.thickness=="1.6"){
			preisForCentimeterMaterial = 0.10; 	
		}

		else if(plate.thickness=="3.2"){
			preisForCentimeterMaterial = 0.15;			
		}		

		else {
			console.log("Wrong laminat thickness is choosed");
		}		
	}

// ALUMINIUM

		else if(plate.material=='Aluminium'){

		
		if(plate.thickness=="0.5"){
			preisForCentimeterMaterial = 0.27; //preis for 1cm2			
		}

		else if(plate.thickness=="1"){
			preisForCentimeterMaterial = 0.27;			
		}

		else if(plate.thickness=="1.5"){
			preisForCentimeterMaterial = 0.29; 	
		}

		else if(plate.thickness=="2"){
			preisForCentimeterMaterial = 0.32;			
		}		

		else {
			console.log("Wrong aluminium thickness is choosed");
		}		
	}

	preisForMaterial = preisForCentimeterMaterial*(plate.height*plate.width);
	preisForMarking = plate.engraveSize*plate.engraveCosts + plate.uvSize*plate.uvCosts;	
	plate.allPreis = (plate.quantity*(preisForMaterial+preisForMarking)).toFixed(2);	
		
	if(plate.allPreis<30){
		plate.allPreis=30;
	}

	else if(plate.allPreis>300 && plate.allPreis<=500){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.05)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.05)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.05);
	}

	else if(plate.allPreis>500 && plate.allPreis<=700){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.1)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.1)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.1);
	}

	else if(plate.allPreis>700 && plate.allPreis<=900){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.15)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.15)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.15);
	}

	else if(plate.llPreis>900 && plate.allPreis<=1100){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.2)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.2)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.2);
	}

	else if(plate.allPreis>1100 && plate.allPreis<=1300){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.25)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.25)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.25);
	}

	else if(plate.allPreis>1300 && plate.allPreis<=1500){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.3)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.3)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.3);
	}

	else if(plate.allPreis>1500 && plate.allPreis<=1700){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.35)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.35)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.35);
	}

	else if(plate.allPreis>1700 && plate.allPreis<=2000){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.4)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.4)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.4);
	}

	else if(plate.allPreis>2000){
		preisForMaterial = (preisForMaterial-(preisForMaterial*0.5)).toFixed(2);
		preisForMarking = (preisForMarking-(preisForMarking*0.5)).toFixed(2);
		plate.allPreis = plate.allPreis-(plate.allPreis*0.5);
	}


	preisForMarkingInt = Number.parseFloat(preisForMarking);
	preisForMaterialInt = Number.parseFloat(preisForMaterial);
	var singlePlatePrice=(preisForMaterialInt+preisForMarkingInt).toFixed(2);

	console.log(plate.material, plate.thickness, plate.height, plate.width, plate.quantity, plate.uvSize, plate.engraveSize);
	console.log("1. preis for marking:"+preisForMarkingInt);
	console.log("2. preis for material:"+preisForMaterialInt);
	console.log("3. all preis:"+plate.allPreis);
	console.log("4. single plate price: "+singlePlatePrice);


	if((plate.material=='')||(plate.thickness=='')||(plate.height=='')||(plate.width=='')||(plate.quantity=='')){
	
		alert('Fields: "Material, Thickness, Height, Width and Quantity are required!');
	       
	}

	else {
		console.log("Filling operation goes well");
		
		var data = {
	    service_id: 'drukarnia_grupaoficyna_pl',
	    template_id: 'template_iqGpz9Tt',
	    user_id: 'user_KwRBW0sKYqHb9dtvE0U9k',
	    template_params: {
	        'clientEmailAddress': gettingCustomerEmail(),
	        'material': plate.material,
	        'thickness': plate.thickness,
	        'height': plate.height,
	        'width': plate.width,
	        'quantity': plate.quantity,
	        'uvSize': plate.uvSize,
	        'engraveSize': plate.engraveSize,
	        'singlePlatePreis': singlePlatePrice,
	        'allPreis': plate.allPreis,
	        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
	    }
	};

	emailSending(data);

	}
};



// getting the email addres from the client
function gettingCustomerEmail(){

	var addr = prompt("ENTER THE ADDRESS TO WHICH WE WILL SEND AN OFFER\n\nProviding an email address is tantamount to agreeing to send offers.");

	var hasEmailSign = addr.includes("@");
	var hasDotSign = addr.includes(".");

	if (addr == null || addr == "" || (hasEmailSign ==false) || (hasDotSign ==false)) {
		addr = "User cancelled the prompt.";
		alert('Wrong address!');
		window.location.reload();

	}   

	else{
	  return addr;	
	}

	console.log(addr);
};



//emailJS
function emailSending(preparedData){
	
	 data = preparedData;

	$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
	    type: 'POST',
	    data: JSON.stringify(data),
	    contentType: 'application/json'
	}).done(function() {

		console.log("Email is sended correctly");
	    window.location.replace("sommering.html");  

	}).fail(function(error) {

		console.log("There was some problems with sending this email. See the detils bellow." + JSON.stringify(error));
	    alert('Oops... ' + JSON.stringify(error));	    
	});

	
};


function fillingOptions(){

	console.log("Material thickness filling");
	document.getElementById('thickness').innerHTML="";

	var material=document.getElementById("material").value;
	var select = document.getElementById('thickness');
	var opt1 = document.createElement('option');
	var opt2 = document.createElement('option');
	var opt3 = document.createElement('option');
	var opt4 = document.createElement('option');

	
	if((material=='rostfreier Stahl')||(material=='Aluminium')){   

		//var opt1 = document.createElement('option');
		opt1.value = 0.5;
	    opt1.innerHTML = 0.5;
	    select.appendChild(opt1);
	    
 		//var opt2 = document.createElement('option');
	    opt2.value = 1;
	    opt2.innerHTML = 1;
	    select.appendChild(opt2);
	    
		//var opt3 = document.createElement('option');
	    opt3.value = 1.5;
	    opt3.innerHTML = 1.5;
	    select.appendChild(opt3);

	    opt4.value = 2;
	    opt4.innerHTML = 2;
	    select.appendChild(opt4);
	    
	}

	else if(material=='Messing'){   

		
		opt1.value = 0.5;
	    opt1.innerHTML = 0.5;
	    select.appendChild(opt1);
	    
 		//var opt2 = document.createElement('option');
	    opt2.value = 1.3;
	    opt2.innerHTML = 1.3;
	    select.appendChild(opt2);
	    
		//var opt3 = document.createElement('option');
	    opt3.value = 1.5;
	    opt3.innerHTML = 1.5;
	    select.appendChild(opt3);
	    
	   // var opt4 = document.createElement('option');
	    opt4.value = 2;
	    opt4.innerHTML = 2;
	    select.appendChild(opt4);
	    
	}
	

	else if(material=='Laminat'){   

		
		opt1.value = 0.2;
	    opt1.innerHTML = 0.2;
	    select.appendChild(opt1);
	    
 		//var opt2 = document.createElement('option');
	    opt2.value = 0.8;
	    opt2.innerHTML = 0.8;
	    select.appendChild(opt2);
	    
		//var opt3 = document.createElement('option');
	    opt3.value = 1.6;
	    opt3.innerHTML = 1.6;
	    select.appendChild(opt3);
	    
	   // var opt4 = document.createElement('option');
	    opt4.value = 3.2;
	    opt4.innerHTML = 3.2;
	    select.appendChild(opt4);
	    
	}

	else{
		console.log("No material choosed");
	}};


	 $(document).ready(function(){
          $('.parallax').parallax();
          $('.dropdown-trigger').dropdown();
          $('.sidenav').sidenav();
          $('.scrollspy').scrollSpy();
          $('.carousel.carousel-slider').carousel({fullWidth: true});
          $('.parallax').parallax();          
          $('.scrollspy').scrollSpy();  
          $('.sidenav').sidenav();
          $('.fixed-action-btn').floatingActionButton({direction: 'top'});
          $('.collapsible').collapsible();
          $('select').formSelect();
          
          
          autoplay();
          function autoplay() {
              $('.carousel').carousel('next');
              setTimeout(autoplay, 5000);
          }

          $('a').click(function(){
            $('html, body').animate({
              scrollTop: $( $(this).attr('href')).offset().top},900);
            });          
        });


