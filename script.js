// Make http request for resources from database
let resources = new XMLHttpRequest();
resources.open('GET', localhost:5432/journal, false);
resources.send();
resources.responseType = 'text';

// Functions e.g. remove, create,... that work when data is loaded
resources.onload = function() {
    
    var data = JSON.parse(this.response);
    
    // Function to display resources
    displayResources(data);

    // Function to create a resource
    createResource();

    // FUnction to delete a resource
    deleteResource();
}

// Functions are defined here
// Display resources
function displayResources(data) {

}

// Create resource button
function createResource() {

}

// Delete resource button
function deleteResource() {
    document.getElementById("delete").innerHTML = "Hello World";
}
