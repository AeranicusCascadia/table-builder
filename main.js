// Main javascript


// Disable event: focus on press 'Enter'
function stopRKey(evt) { 
  var evt = (evt) ? evt : ((event) ? event : null); 
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 
document.onkeypress = stopRKey

// HIDE FUNCTIONS

// Hide tableGenerator button 
function hideTableGeneratorButton() {
	document.getElementById("tableGeneratorButton").hidden = true;
}

// Hides input forms and button
function hideInputsDiv() {
	document.getElementById("inputs").hidden = true;
}

// SHOW FUNCTIONS

// show table generator button
function showtableGeneratorButton() {
document.getElementById("tableGeneratorButton").hidden = false;
}

// Wrapper function to call onload functions
function pageLoadFunctions() {
	hideTableGeneratorButton();
}

// create object: myTable
var myTable = {
	title: 'untitled',
	subtitle: 'none',
	rows: 0, 
	cols: 0
}

// Checks contents of fields: choose_rows, choose_cols for valid number.

function validateRowsCols() {
	val_rows = document.getElementById("choose_rows").value;
	val_cols = document.getElementById("choose_cols").value;
	
	if (isNaN(parseInt(val_rows)) || isNaN(parseInt(val_cols))) { // If check fails, reloads page
		window.alert("Please enter only numbers for rows and columns.");
		location.reload();
	} else {
		// window.alert("All numbers.");
		return;
	}
}

// Takes form input to declare initial number of rows and columns
function setRowsCols() {
	var num_rows = document.getElementById("choose_rows").value;
	var num_cols = document.getElementById("choose_cols").value;

	// Modifies myTable properties based on validated form input data
	myTable.rows = parseInt(num_rows)+1; // extra row created for column headers
	myTable.cols = parseInt(num_cols);
}

function buildInitialEmptyTable() {
	
	// create local var 'table' and assign div element 'my_table' to it
	var table = document.getElementById("my_table");
	
	for (i = 0; i < myTable.rows; i++) { // Outer loop: iterate based on 'row's property of 'myTable' object
	
	var row; // declare local variables 'row' and 'cell'
	var cell;
		
		// Outer loop iterates rows
		if (i==0){ // If this is the first iteration of outer loop (first row, column header):
			
			row = table.insertRow(i); // row variable holds result of calling insertRow method on table
			row.classList.add("first"); // Assign a new CSS class to row variable.
			
			// Inner loop iterates colums (cells per row)
			for (j = 0; j < myTable.cols; j++) { // Iterate loop of how many cells to insert in first row based on myTable.cols
				cell = row.insertCell(j); // call insert cell method on row variable at 'j' position of row.
				cell.innerHTML = '<textarea></textarea>'; // pass hmtl contents to cell
			}
		}else{ // if it's not the first iteration of outer loop (first row):
			// row variable holds result of calling insertRow method on table at outer loop index, same as above.
			row = table.insertRow(i); 
			
			// Inner loop iterates colums (cells per row)
			for (j = 0; j < myTable.cols; j++) { // Iterate based on myTable.cols
				cell = row.insertCell(j); // Insert cell into row at 'j' position 
				cell.innerHTML = '<textarea></textarea>'; // // pass hmtl contents to cell 
			}
		}
	}
		
	hideInputsDiv() // hide 'inputs' div
	showtableGeneratorButton() // show table generator button
	
	// Use mouseup listener instead of resize event
	$("textarea").mouseup(function(){
		var elem_width = $(this).width();
		$("textarea").width(elem_width);
	});
	
	} // close function
	
function addOneRow() {
	
	var table = document.getElementById("my_table");
	row = table.insertRow(-1);
	
	for (j = 0; j < myTable.cols; j++) {
		var cell = row.insertCell(j);
		cell.innerHTML = '<textarea></textarea>'; 
	}
	
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

