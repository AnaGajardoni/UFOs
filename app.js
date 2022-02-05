// import the data from data.js
const tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html("")
    
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {

    // Get the dateime from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Filter the data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date)
    };

    // Build the table using the filtered data
    buildTable(filteredData);
}

// Set the Event handler for button with tag #filter-btn
d3.selectAll("#filter-btn").on("click", handleClick())

// Build the table when the page loads
buildTable(tableData);