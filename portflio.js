
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
//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "swetharamagiri.99@gmail.com",
	Password : "Swetha@1234",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
