// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com'];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
	myLeads.push(inputEl.value);
	console.log(myLeads);
});

let listItems = '';
for (let i = 0; i < myLeads.length; i++) {
	listItems += '<li>' + myLeads[i] + '</li>';
	console.log(listItems);
}

ulEl.innerHTML = listItems;
