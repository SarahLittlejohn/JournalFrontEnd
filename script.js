const resourceDisplay = document.querySelectorAll();

// Make http request for resources from database
let resources = new XMLHttpRequest();
resources.open('GET', 'http://localhost:5432', true);

//resources.responseType = 'text';

// Functions e.g. remove, create,... that work when data is loaded
resources.onload = function() {

    var data = JSON.parse(resources.response);

    // Function to display resources
    //displayResources(data);

    // Function to create a resource
    createResourceButton();

    // Function to delete a resource
    deleteResourceButton();

    // Function to update a resource
    updateResourceButton();

}

resources.send();

// Functions are defined here
// Display resources
function displayResources(data) {
// Display data in the form of a table
    document.getElementById("demo").innerHTML = resources.response;
}


// Create resource button
function createResourceButton() {
    document.getElementById("demo").innerHTML = "Test create button";
}

// Function for creating resource (via button)
function createResource(){

}

// Delete resource button
function deleteResourceButton(buttonId, elementToRemoveId) {
  document.getElementById("demo").innerHTML = "Test delete button";
    // buttonId.addEventListener('click', deleteResource(elementToRemoveId));
  }

  // Function for removing an element (via button)
function deleteResource(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }

  // Update resource button
  function updateResourceButton(buttonId, elementToUpdateId) {
    document.getElementById("demo").innerHTML = "Test update button";
    //buttonId.addEventListener('click', updateResource(elementToUpdateId));
  }

  // Function for updating an element (via button)
  function updateResource(elementToUpdateId) {

  }