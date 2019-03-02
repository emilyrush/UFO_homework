// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

  filteredData.forEach((sightingsList) => {
    var row = tbody.append("tr");
    Object.entries(sightingsList).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    })
})
});


// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//     cell.text(value);
//   });
// });