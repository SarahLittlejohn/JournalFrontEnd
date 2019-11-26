// Make http request for resources from database
let resources = new XMLHttpRequest();
resources.open('GET', "http://localhost:5432/journal", false);
resources.send();
resources.responseType = 'text';

// Functions e.g. remove, create,... that work when data is loaded
resources.onload = function() {

    var data = JSON.parse(this.response);

    // Function to display resources
    displayResources(data);

    // Function to create a resource
    createResourceButton();

    // FUnction to delete a resource
    deleteResourceButton();

}

// Functions are defined here
// Display resources
function displayResources(data) {

}

// Create resource button
function createResourceButton() {
    buttonId.addEventListener('click', createResource());
  }

// Function for creating resource (via button)
function createResource(){
    
}

// Delete resource button
function deleteResourceButton(buttonId, elementToRemoveId) {
    buttonId.addEventListener('click', deleteResource(elementToRemoveId));
  }

  // Function for removing an element (via button)
function deleteResource(elementId){
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }