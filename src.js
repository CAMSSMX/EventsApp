/*$(document).on("ready",start);*/
var messageError = "";
$("#login").on("click",accessApp);
$("#attend").on("click",showAttendees);
$("#update").on("click", function(){ alert("Se ha actualizado el evento.");});
$("#cancel").on("click",function(){alert("Se ha cancelado el evento.");});


function accessApp() {
	// alert("Ya estamos aca");
	// var loginSuccess = validateLogin();
	var loginSuccess = validateLogin();
	$("#loginSection span").hide();
	// $("#loginSection span").fadeOut(200);
	console.log(loginSuccess.success);

	if(loginSuccess.success==true){
		$("#welcome span").html($("#username").val().toUpperCase());
		$("#loginSection").fadeOut(1000).delay(1000);
		$("#commonMenu").fadeIn(300).delay(1000);
		if(loginSuccess.role=="admin") {
			$("#adminMenu").fadeIn(300).delay(1000);
			$(".adminButtons").css("display","inline-block");
		}
		$("#welcome").fadeIn(200);
		$("#home").delay(800).fadeIn(700);
		$("#username").val("");
		$("#password").val("");
		$("#loginSection span").delay(800).css("display","none");
		// testJSON();
	} else {
		$("#loginSection span").delay(500).fadeIn(300);
		// $("#loginSection span").delay(800).html(messageError);
		$("#loginSection span").delay(800).html(loginSuccess.message);
		// testJSON();
	}
	console.log("Ya debio mostrarlo")
}

function exitApp() {
	$("#attendees").hide(500);
	$("#welcome").fadeOut(200);
	$("nav").fadeOut(600).delay(5000);
	var cssHide = { "display":"none"}; 
	$("#home, #newEvent, #myEvents, #eventDetail").css(cssHide);
	$("#loginSection").fadeIn(1000);
}


function showAttendees(){
	$("#attendees").delay(400).fadeIn(500);
}

$("#about").on("click",function(){
	$("#about").css("height","200px");
});
$("#about").on("mouseout",function(){
	$("#about").css("height","1em");
});