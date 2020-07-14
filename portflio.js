
$("#button").click(function(event){
if(($("#check").is(":checked"))){
	$("#check").prop('checked', false);
	$(".nav-bar").removeClass('active');
	$(".nav-bar").addClass("topMenu");
	$("#about").addClass("margin");
	$(".row").addClass("margin");


} 
 });

// if($("#check").checked==false){
// 	console.log(" not checked");
// 	$("section").addClass('topMenu');
// 	$("section").removeClass("active");
// 	//$(".sidebar").css({"left": "260px"});
// }
// else{
// 	console.log(" sravanthi ");
// 		$(".nav-bar").removeClass('topMenu');
// 	$(".nav-bar").addClass("active");
// }

$("#check").change(function(event){
if(this.checked===true){
	console.log("checked");
	$("section").addClass('active');
	$("section").removeClass("topMenu");
	$("#about").removeClass("margin");
	$(".row").removeClass("margin");

}
else{
	console.log(" sravanthi ");
		$(".nav-bar").removeClass('active');
	$(".nav-bar").addClass("topMenu");
		$("#about").addClass("margin");
		$(".row").addClass("margin");

}
});
