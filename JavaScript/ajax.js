// JavaScript code for making an AJAX call

// Function to handle the AJAX request
function makeAjaxCall(referenceId) {
    // Display a loading message
    showLoadingMessage();
  
    // Make the AJAX call
    $.ajax({
      url: 'your_php_file.php', // Replace with the actual URL of your PHP file
      method: 'GET', // You can change the HTTP method if needed
      data: { referenceId: referenceId }, // Pass the reference ID as a parameter
      success: function (response) {
        // Update the state based on the response
        updateState(response);
  
        // Hide the loading message
        hideLoadingMessage();
      },
      error: function (error) {
        // Handle any errors here
        console.error('Error:', error);
  
        // Hide the loading message
        hideLoadingMessage();
      }
    });
  }
  
  // Function to show a loading message on the screen
  function showLoadingMessage() {
    // Display a loading message on the page, e.g., change the innerHTML of a loading div
    document.getElementById('loading-message').innerHTML = 'Loading...';
  }
  
  // Function to hide the loading message
  function hideLoadingMessage() {
    // Remove or hide the loading message from the screen
    document.getElementById('loading-message').innerHTML = '';
  }
  
  // Function to update the state based on the server response
  function updateState(response) {
    // Update the state with the data received from the server
    // You can parse and process the response here as needed
    // For example, update the content of an element with the response data
    document.getElementById('result').innerHTML = response;
  }
  
  // Example usage
  makeAjaxCall(123); // Pass the reference ID you want to use