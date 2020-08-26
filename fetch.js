
document.getElementById('form2'). addEventListener('submit', submitSignupForm);
function submitSignupForm(e) {
	e.preventDefault();
	var email=myInput('email-signup');
    var password=myInput('passcode-signup');
    
    fetch('http://localhost:8000/user/signup', 

{

    method: 'POST',
    headers: new Headers(),
    headers:{
        'accept' : 'application/json, text/plain,"/"',
        'Content-Type':'application/json'
    },
    mode: 'no-cors',
    body:JSON.stringify({
     
     email:email,
     password:password
    }),
})
.then( res =>{
    console.log(res.json);
    return res.json()
})
.then(data =>console.log(data))
.catch(err =>console.log(err) );
	
}


function myInput(id) {
	return document.getElementById(id).value;
}






