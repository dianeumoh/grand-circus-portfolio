function thankyou(event) {
	var x = document.getElementById("contactdi");
    var i;
    for (i = 0; i < x.length; i++) {
    	if (x.elements[i].value != "Submit") {
		    x.elements[i].value = x.elements[i].value.toUpperCase();
    	}
    }
}