document.getElementById("form2").addEventListener("submit", submitSignupForm);

function submitSignupForm(e) {
  e.preventDefault();
  var email = myInput("email-signup");
  var password = myInput("passcode-signup");
  fetch(`http://127.0.0.1:5050/user/signup`, {
    // Adding method type
    method: "POST", // Adding body or contents to send
    mode: "cors",
    body: JSON.stringify({
      email,
      password,
    }), // Adding headers to the request
    headers: {
      "Content-Type": "application/json",
    },
  }) // Converting to JSON
    .then((response) => response.json()) // Displaying results to console
    .then((json) => console.log(json))
    .catch((err) => console.log("Login Error happen", err));
}

function myInput(id) {
  return document.getElementById(id).value;
}
