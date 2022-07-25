/**function changeBackgroundColor(color){
	
	document.body.style.backgroundColor = 'lightblue';
	if(document.body.style.backgroundColor != color){
		document.body.style.backgroundColor = 'green';
	}
}**/
function changeBackgroundColor() {
  if(document.body.style.backgroundColor == "green"){
  	document.body.style.backgroundColor = "red";
  }
  else{
  	document.body.style.backgroundColor = "green";
  }
  
}