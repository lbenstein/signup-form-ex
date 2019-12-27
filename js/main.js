// Write your JavaScript below these comments...
/*
- Add some markup to your form for the warning messages and indicators (see Active States mockup)
- Hide the warning markup via CSS by default
- “Grab” the elements from the DOM that you’ll need to either listen to or update
- Create a function that will check your form input fields for values and/or specific characters (in the email field).
- If input fields don’t meet certain criteria, then show the warning markup
- Add an event listener that will run your function when certain user actions are taken
(firstname == null || firstname == "")

- Let’s pull all of your variables _outside_ of your `isEmpty` function. We don’t want to be re-declaring those
variable every time that function is run, so we should move them into the global scope and utilize them inside
the function as necessary.
-  Rather than store each individual input field in it’s own variable, think about how can we can store _all_ of
our non-submit input types into a single variable (hint: what do we get when we use `querySelectorAll`?). This
will set us up to be able to loop through each input field, check for a user input value, and then do some stuff.
- For now, let’s just focus on adding an event listener that fires when a user clicks the submit button. When
that occurs, we should check for valid values in our input fields and display our warning messages accordingly.
-Maybe even before you try the conditionals to check your input fields, simply try showing your hidden warnings
when someone clicks the submit button. Then work from there.


*/

var firstname = document.getElementById('first');
var lastname = document.getElementById('last');
var email = document.getElementById('email');
var password = document.getElementById('pass');
var firstnameW = document.getElementById('firstname-warning');
var lastnameW = document.getElementById('lastname-warning');
var emailW = document.getElementById('email-warning');
var passwordW = document.getElementById('password-warning');

var inputs = document.querySelectorAll('input:not([type="submit"])');

var mySubmit = document.getElementById('submit');

function isEmpty(event){
  // if the field is empty

for (vInput of inputs){
  // reset warning styles
  vInput.nextElementSibling.style.display = "none";
  vInput.classList.remove('input-warning');
  // if an input is empty
  if (vInput.type === 'email' && !vInput.value.includes('@' && '.') || vInput.value === ''){
      vInput.classList.add('input-warning');
      vInput.nextElementSibling.style.display = 'block';
      }
}

    // Prevent default form submission behavior
        event.preventDefault();
}
mySubmit.addEventListener('click', isEmpty, false);

    // Run same function on blur
document.addEventListener('blur', function(event) {
  if (event.target.matches('input:not([type="submit"])')) {
  isEmpty(event);
}
}, true);
