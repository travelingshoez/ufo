// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  function buildTable(data) {

}

//Clear DSata in Java Script
//function buildTable(data) {
//tbody.html("");
//}
//FUNCTION specifically for building the table. 
//data.forEach((dataRow) => {
//});
//variable that will append a row to the table body
//let row = tbody.append("tr");
// reference one object from the array, values to go into the dataRow
//Object.values(dataRow).forEach((val) => {
//appending data into a table data tag only the text of the value.
//let cell = row.append("td");
//add the values.
//cell.text(val);

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

