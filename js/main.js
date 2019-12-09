// Write your JavaScript below these comments...
/*
- Add some markup to your form for the warning messages and indicators (see Active States mockup)
- Hide the warning markup via CSS by default
- “Grab” the elements from the DOM that you’ll need to either listen to or update
- Create a function that will check your form input fields for values and/or specific characters (in the email field).
- If input fields don’t meet certain criteria, then show the warning markup
- Add an event listener that will run your function when certain user actions are taken
(firstname == null || firstname == "")
*/



function isEmpty(value){

  var firstname = document.getElementById('first');
  var lastname = document.getElementById('last');
  var email = document.getElementById('email');
  var password = document.getElementById('pass');
  var firstnameW = document.getElementById('firstname-warning');
  var lastnameW = document.getElementById('lastname-warning');
  var emailW = document.getElementById('email-warning');
  var passwordW = document.getElementById('password-warning');


    if (firstname.value == null || firstname.value.length === 0) {
      firstnameW.style.visibility = "visible";
    }
}
