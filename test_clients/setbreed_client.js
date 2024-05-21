// Your JSON data
const jsonData = { breed: "a" };

// Converter endpoint targeted:
const endpoint = "http://localhost:3001/hands-converter/set-breed";

// Set up options for the fetch request
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Set content type to JSON
  },
  body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
};

// Make the fetch request with the provided options
fetch(endpoint, options)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log("Response: ", data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });