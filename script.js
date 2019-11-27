const resourceDisplay = document.querySelectorAll();

// Make http request for resources from database
let resources = new XMLHttpRequest();
resources.open('GET', 'http://localhost:8094/resources', false);
resources.send();
resources.responseType = 'text';

// Functions e.g. remove, create,... that work when data is loaded
resources.onload = function() {

    var data = JSON.parse(this.response);

    // Function to display resources
    displayResources(data);

    // Function to create a resource
    createResourceButton();

    // Function to delete a resource
    deleteResourceButton();

    // Function to update a resource
    updateResourceButton();

}

// Functions are defined here
// Display resources
function displayResources(data) {

  
// Display data in the form of a table

}


// Create resource button
function createResourceButton() {
    document.getElementById("demo").innerHTML = "Hello world";
}

// Function for creating resource (via button)
function createResource(){

}

// Delete resource button
function deleteResourceButton(buttonId, elementToRemoveId) {
    buttonId.addEventListener('click', deleteResource(elementToRemoveId));
  }

  // Function for removing an element (via button)
function deleteResource(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }

  // Update resource button
  function updateResourceButton(buttonId, elementToUpdateId) {
    buttonId.addEventListener('click', updateResource(elementToUpdateId));
  }

  // Function for updating an element (via button)
  function updateResource(elementToUpdateId) {

  }