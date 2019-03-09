// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("#filter-btn");

// Show all data
data.forEach((sightingsList) => {
    var row = tbody.append("tr");
    Object.entries(sightingsList).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    })
});

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Clear previous search data
    tbody.html("");
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state")
  
    // Get the value property of the input element
    var inputDate = inputElement.property("value");
    var cityElement = inputCity.property("value");
    var stateElement = inputState.property("value");

    var filteredData = tableData;
    if(inputDate !== '') {
        filteredData = tableData.filter(sighting => 
            sighting.datetime == inputDate) 
        };
    if(cityElement !== '') {
        filteredData = filteredData.filter(sighting =>
            sighting.city == cityElement)
        };
    if(stateElement !== '') {
        filteredData = filteredData.filter(sighting =>
            sighting.state == stateElement)
        };
    });