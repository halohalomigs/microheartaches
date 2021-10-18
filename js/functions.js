function reveal() {
    const body = document.getElementById("body");
	const logo = document.getElementById("logo");
	const ctrl = document.getElementById("controls");
	const path = document.getElementById("options");
	body.style.opacity = '1';
    body.style.visibility = 'visible';
    logo.style.opacity = '1';
	logo.style.visibility = 'visible';
	ctrl.style.opacity = '1';
	ctrl.style.visibility = 'visible';
	path.style.opacity = '1';
	path.style.visibility = 'visible';
}

function nextPage() {    
    const array = document.getElementById("page").src.split("/");    
    var input = parseInt(array[5]);
    var pageNumber = input;
    pageNumber++;
    
    if (pageNumber == 59) {
        hideArrow("next");
    }
    else if (pageNumber > 1) {
        showArrow("back");
    }

    assignSelected(pageNumber);
    document.getElementById("page").src = "img/" + pageNumber + ".png";
}

function backPage() {
    const array = document.getElementById("page").src;//.split("/");   
	console.log(array);
    var input = parseInt(array[5]);
    var pageNumber = input;
    pageNumber--;

    if (pageNumber == 1) {
        hideArrow("back");
    }
    else if (pageNumber < 32) {
       showArrow("next");   
    }

    assignSelected(pageNumber);
    document.getElementById("page").src = "img/" + pageNumber + ".png";

}

function assignSelected(n) {
    var options = document.getElementsByTagName("option");
    options[n - 1].selected = true;
}


function directPage() {
    var input = document.getElementById("paths").value;    
    document.getElementById("page").src = "img/" + input + ".png";

    if (input == 1) {
        hideArrow("back");
        showArrow("next");
    }
    else if (input == 32) {
        hideArrow("next"); 
        showArrow("back");  
    }
    else {
        showArrow("back");
        showArrow("next");
    }

}

function redirectPage(v) {
    var input = v;    
    document.getElementById("page").src = "img/" + input + ".png";

    if (input == 1) {
        hideArrow("back");
        showArrow("next");
    }
    else if (input == 32) {
        hideArrow("next"); 
        showArrow("back");  
    }
    else {
        showArrow("back");
        showArrow("next");
    }

    assignSelected(input);
}

function hideArrow(n) {
    const arrow = document.getElementById(n);
    arrow.style.opacity = '0';
    arrow.style.visibility = 'hidden';
}

function showArrow(n) {
    const arrow = document.getElementById(n);
    arrow.style.opacity = '0.4';
    arrow.style.visibility = 'visible';
}
