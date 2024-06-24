const form = document.querySelector('#form')
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const addForm = (e) => {
  e.preventDefault();

  if (firstName.value === '' || lastName.value === '' ||email.value === '' || password.value === '') {
    alert('Please fill out the required fields!')
    saveData();
  } else {
    firstName.innerHTML = firstName.value;
    lastName.innerHTML = lastName.value;
    email.innerHTML = email.value;
    password.innerHTML = password.value;
    saveData();
  }
  saveData();
}

const saveData = () => {
  localStorage.setItem('data', firstName.innerHTML);
  localStorage.setItem('data', lastName.innerHTML);
  localStorage.setItem('data', email.innerHTML);
  localStorage.setItem('data', password.innerHTML);
}

const showData = () => {
  firstName.innerHTML = localStorage.getItem('data');
  lastName.innerHTML = localStorage.getItem('data');
  email.innerHTML = localStorage.getItem('data');
  password.innerHTML = localStorage.getItem('data');
}

form.addEventListener('submit', addForm)
showData();