// Access 'root' div inside index.html
const app = document.getElementById('root')

// Create a div and set the class to be 'container'
const container = document.createElement('div')
container.setAttribute('class', 'container')
// Append the container div to the app root
app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  // Begin looking at JSON data here

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  // If statement checks for errors
  if (request.status >= 200 && request.status < 400) {
    // For each resource, create a card
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // Make the name the heading of each card
      const h2 = document.createElement('h2')
      h2.textContent = movie.title

      // Make the url the secondary heading of each card
      const h3 = document.createElement('h3')
      h3.textContent = movie.producer

      // Make the description the paragraph of each card
      const p = document.createElement('p')
      p.textContent = movie.description

      // Add all information to the card
      container.appendChild(card)
      card.appendChild(h2)
      card.appendChild(h3)
      card.appendChild(p)
  })} else {
    console.log('error')
  }
}

// Send request
request.send()

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