
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
function myFunction(x) {
  if (x.matches) { 
    $(".topMenu a").css("font-size","10px");
 

  } else {
       $(".topMenu a").css("font-size","15px");

  }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)