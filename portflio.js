
$("#button").click(function(event){
if(($("#check").is(":checked"))){
	$("#check").prop('checked', false);
	$(".nav-bar").removeClass('active');
	$(".nav-bar").addClass("topMenu");


} 
 });

$("#check").change(function(event){
if(this.checked===true){
	console.log("checked");
	$("section").addClass('active');
	$("section").removeClass("topMenu");

}
else{
	console.log("unchecked ");
	$(".nav-bar").removeClass('active');
	$(".nav-bar").addClass("topMenu");
	

}
});
