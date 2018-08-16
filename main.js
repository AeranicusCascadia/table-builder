// Main javascript


function stopRKey(evt) { 
  var evt = (evt) ? evt : ((event) ? event : null); 
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 

document.onkeypress = stopRKey


function hideButton() {
	document.getElementById("tableGenerator").hidden = true;
}

var myTable = {
	title: 'untitled',
	subtitle: 'none',
	rows: 0, 
	cols: 0
}

function setRowsCols() {
	var num_rows = document.getElementById("choose_rows").value;
	var num_cols = document.getElementById("choose_cols").value;

	myTable.rows = parseInt(num_rows)+1; 
	myTable.cols = num_cols;
}


function validateRowsCols() {
	val_rows = document.getElementById("choose_rows").value;
	val_cols = document.getElementById("choose_cols").value;
	
	if (isNaN(parseInt(val_rows)) || isNaN(parseInt(val_cols))) {
		window.alert("Please enter only whole numbers for rows and columns.");
		location.reload();
	} else {
		// window.alert("All numbers.");
		return;
	}
}


function buildInitialEmptyTable() {
	// target div
	var table = document.getElementById("my_table");
	
	for (i = 0; i < myTable.rows; i++) { // changed i from 0
	var row,
		cell;
		if (i==0){
			console.log(i);
			row = table.insertRow(i);
			row.classList.add("first");
			console.log(row);
			for (j = 0; j < myTable.cols; j++) {
				cell = row.insertCell(j);
				cell.innerHTML = '<textarea></textarea>';
				
				// working code:
				// cell.innerHTML = '<form><input type="text"></form>'; 
			}
		}else{
			row = table.insertRow(i);
		
			for (j = 0; j < myTable.cols; j++) {
				cell = row.insertCell(j);
				cell.innerHTML = '<textarea></textarea>';
				
				// working code:
				// cell.innerHTML = '<form><input type="text"></form>'; 
			}
		
		}
	}
		
	// Hides input forms and button
	document.getElementById("inputs").hidden = true;
	// Shows generate graphic button
	document.getElementById("tableGenerator").hidden = false;
}


function addRowsCols() {
	validateRowsCols();
	setRowsCols();
	buildInitialEmptyTable();
}

function generatePNG() {
	takeScreenShot();
	hideButton();
}

/*
// Example funtion for adding rows and cells
function addRow() {
	// Find a <table> element with id
	var table = document.getElementById("blank_table");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(0);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
}
*/
	
