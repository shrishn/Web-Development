/* Submit Button Action */
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const input1 = form.querySelector('input[name="user_name"]');
  const input2 = form.querySelector('input[name="user_email"]');
  const input3 = form.querySelector('input[name="user_message"]');
  
  if (input1.value === '' || input2.value === '' || input3.value === '') {
    event.preventDefault();
    alert('Please fill in all three fields');
  }
});

/* Reset Button Function */
form.addEventListener('reset', function() {
    const input1 = form.querySelector('input[name="user_name"]');
    const input2 = form.querySelector('input[name="user_email"]');
    const input3 = form.querySelector('input[name="user_message"]');
  input1.value = '';
  input2.value = '';
  input3.value = '';
});

/* Invalid Input in Name Field */
const nameInput = document.querySelector('input[name="user_name"]');
nameInput.addEventListener('input', function() {
  const nameValue = nameInput.value;
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(nameValue)) {
    alert('Invalid input');
    nameInput.value = '';
  }
});

/* Adding Three Fields to the form */
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function() {
  const newRow = document.createElement('div');
  newRow.classList.add('form-row');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Name');
  const userIdInput = document.createElement('input');
  userIdInput.setAttribute('type', 'text');
  userIdInput.setAttribute('name', 'user-id');
  userIdInput.setAttribute('placeholder', 'User ID');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'Email ID');
  newRow.appendChild(nameInput);
  newRow.appendChild(userIdInput);
  newRow.appendChild(emailInput);
  form.appendChild(newRow);
});

/* Export Button Function */
const exportButton = document.querySelector('#export-button');
const nameInputs = document.querySelectorAll('input[name="user_name"]');
const emailInputs = document.querySelectorAll('input[name="user_email"]');

exportButton.addEventListener('click', function() {
  const rows = [];

  for (let i = 0; i < nameInputs.length; i++) {
    const name = nameInputs[i].value;
    const email = emailInputs[i].value;

    rows.push(`${name},${email}`);
  }

  const csvContent = rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'export.csv');

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

/* Clear Button Function */
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', function() {
  const activeElement = document.activeElement;

  if (activeElement.tagName == 'INPUT' && activeElement.type == 'text') {
    activeElement.value = '';
  }
});


