// Make http request for resources from database
let resources = new XMLHttpRequest();
resources.open('GET', localhost:5432/journal, false);
resources.send();
resources.responseType = 'text';

resources.onload = function() {
    // Contains functions e.g. remove, create,... that work when data is loaded.
    var data = JSON.parse(this.response);
    
    // Function to display resources
    display.resources(data);

    // Function to create a resource
    createResource();

    // FUnction to delete a resource
    deleteResource();
}

// Functions are defined here
// Create resource button

// Delete resource button
