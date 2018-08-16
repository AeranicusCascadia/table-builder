// Table Builder 

function FireOnPageLoad() {
	document.getElementById("test_target").innerHTML = "Text dynamically inserted on load.";
}

window.onload=FireOnPageLoad;
