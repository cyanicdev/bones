let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementsByClassName("site-header")[0].style.top = "0";
	} else {
		document.getElementsByClassName("site-header")[0].style.top = "-5rem";
	}
	prevScrollpos = currentScrollPos;
} 
