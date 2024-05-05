// Select the email input field
const emailInput = document.getElementById('newsletter1');

// Select the Subscribe button using its id attribute
const subscribeButton = document.getElementById('emailbtn');

// Define a regular expression to validate the email address
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Add an event listener to the Subscribe button to listen for the click event
subscribeButton.addEventListener('click', function() {
  // Get the value of the input field
  const email = emailInput.value;

  // Check if the email address is valid using the regular expression
  if (emailRegex.test(email)) {
    // If the email address is valid, display an alert message
    alert('You have been subscribed successfully!');
  } else {
    // If the email address is not valid, display an alert message
    alert('Please enter a valid email address.');
  }
});