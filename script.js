// Make http request for resources from database
let resources = new XMLHttpRequest();
resources.open('GET', localhost:5432/journal, false);
resources.send();
resources.responseType = 'text';

