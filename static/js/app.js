// from data.js
var tableData = data;
var tbody = d3.select("tbody");



// --------------------------------- Dat App --------------------------------
// Select the submit button
var submit = d3.select("#filter-btn");

// Show all sighting data
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

  var filteredData = tableData;

  function filterData() {
    if(inputDate !== '') {
      filteredData = filteredData.filter(sighting => 
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
    if(countryElement !== '') {
        filteredData = filteredData.filter(sighting =>
            sighting.country == countryElement)
    };
    if(shapeElement !== '') {
        filteredData = filteredData.filter(sighting =>
            sighting.shape == shapeElement);
    };
    return filteredData;
  };

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state")
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape")

  // Get the value property of the input element
  var inputDate = inputElement.property("value");
  var cityElement = inputCity.property("value");
  var stateElement = inputState.property("value");
  var countryElement = inputCountry.property("value");
  var shapeElement = inputShape.property("value");

  // var filteredData = tableData;
  var filteredData = filterData(tableData);

  console.log(filteredData)

  filteredData.forEach((sightingsList) => {
    var row = tbody.append("tr");
    Object.entries(sightingsList).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    })
})});