var firebaseConfig = {
    apiKey: "AIzaSyCSowyLOaWbzEkrDpqfxOsltEmj6PD7uNU",
    authDomain: "personal-web-cbe9c.firebaseapp.com",
    databaseURL: "https://personal-web-cbe9c.firebaseio.com",
    projectId: "personal-web-cbe9c",
    storageBucket: "personal-web-cbe9c.appspot.com",
    messagingSenderId: "822165723878",
    appId: "1:822165723878:web:49d84b415625d58847f927",
    measurementId: "G-YW30PXMQS4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Reference messages collection
  let db = firebase.firestore();
  
  document.getElementById('form2'). addEventListener('submit', submitSignupForm);
function submitSignupForm(e) {
	e.preventDefault();
	var email=myInput('email-signup');
    var password=myInput('passcode-signup');
    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user)
        window.alert('user successfully created');
      })
	
}


function myInput(id) {
	return document.getElementById(id).value;
}