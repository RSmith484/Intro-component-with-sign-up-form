const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(firstNameValue === '') {
		setErrorFor(firstName, 'First name cannot be blank');
	} else { 
		setSuccessFor(firstName);
	} 

    if(lastNameValue === '') {
		setErrorFor(lastName, 'Last name cannot be blank');
	} else {
		setSuccessFor(lastName);
	}
	
	if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

}

function setErrorFor(input, message) {
	const formItem = input.parentElement;
	const errorMsg = formItem.querySelector('.error-message');
	formItem.className = 'form-item error';
	errorMsg.innerText = message;
}

function setSuccessFor(input) {
	const formItem = input.parentElement;
	formItem.className = 'form-item success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}










