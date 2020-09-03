document.getElementById("idForm").addEventListener("submit", submitSignupForm);

function submitSignupForm(e) {
  e.preventDefault();
  var title = myInput("heading");
  var Writer = myInput("writer");
  var content = myInput("text");
  fetch(`http://127.0.0.1:5050/v1/blogs/new`, {
    // Adding method type
    method: "POST", // Adding body or contents to send
    mode: "cors",
    body: JSON.stringify({
      title,
      Writer,
      content,
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
