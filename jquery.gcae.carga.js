/* 
	Script for templatestd, must be add the code for mobile menu.
 */
var lastSection = "home";
function showSection(section) {
	if (section!=lastSection) {
		console.log(section.toString());
		var sec = "#"+section;
		var lsec = "#"+lastSection;
			// $(lsec).slideUp(700);
			// $(sec).slideDown(700);
			$(lsec).fadeOut(200);
			$("#loading").fadeIn(200).delay(1000).fadeOut(200);
			$(sec).delay(1400).fadeIn(700);
			lastSection = section;
			$("#attendees").hide(500);
	} else if (section=="contacto") {
		$('#form').slideDown(1000);
        $('#message').remove();
    }
}
