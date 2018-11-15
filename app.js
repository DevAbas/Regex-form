// Constant fo selectors
const name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Form blur event listeners
name.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

function validateName() {
  const nameValue = name.value;
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(nameValue)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }
}

function validateZip() {
  const zipValue = zip.value;
  const re = /^AZ[0-9]{4}$/i;

  if(!re.test(zipValue)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const emailValue = email.value;
  const re = /^([a-zA-Z0-9_/-/.]+)@([a-zA-Z0-9_/-/.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(emailValue)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phoneValue = phone.value;
  const re = /^\(?\d{3}\)?[-. ]?\d{2}[-. ]?\d{2}$/;  // (050)379-79-90; 0503797990; 

  if(!re.test(phoneValue)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}