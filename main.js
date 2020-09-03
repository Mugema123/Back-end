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
 
 
 // Reference messages collection
 let db = firebase.firestore();
 
 
 
 console.log(db)






    
 //Extract Element from form
  // Listen for form submit
  function  onlaudFunction(){
   var form=document.getElementById('idForm');
   form.addEventListener('submit',send);
 }
 
 
 
 function send(e) {
   e.preventDefault();
 
   var name=getInput('fname');
   var laname=getInput('lname');
   var email=getInput('email');
   var message=getInput('textar');
  
  db.collection("contatc").add({
          name:name,
          laname:laname,
          email:email,
          message:message
  })
  
  document.querySelector('.alert').style.display='none';
  
  setTimeout(() => {
    document.querySelector('.alert').style.display='none';
  },3000 );
  
  document.getElementById('idForm').reset();
 window.alert("Thank you for contatcing me, I will get back to you shortly");
  db.collection("contatc").get().then(function(snapshot){
    snapshot.forEach(function (doc){
        console.log(doc.data());
    });
  })
 }
 
 
  
 
 function getInput(id){
   return document.getElementById(id).value;
 }