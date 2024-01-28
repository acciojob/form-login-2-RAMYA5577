//your JS code here. If required.
const form=document.querySelector("form");
form.addEventListener("submit",onSubmitForm);
function onSubmitForm(event){
	const firstName=document.getElementById("firstName");
	const lastName=document.getElementById("lastName");
	const phoneNumber=document.getElementById("phoneNumber");
	const email=document.getElementById("email");

	const result="FirstName: "+firstName+"\nLastName: "+lastName+"\nPhone Number: "+phoneNumber+"\nEmail ID: "+email;
	alert(result);
	
}