let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage != null) {
	myLeads = leadsFromLocalStorage;
	renderLeads(myLeads);
}

tabBtn.addEventListener('click', function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem('myLeads', JSON.stringify(myLeads));
	});

	renderLeads(myLeads);
});

function renderLeads(leads) {
	let listItems = '';
	for (let i = 0; i < leads.length; i++) {
		listItems += `<li>
		<a href=' ${leads[i]}' target='_blank'>${leads[i]} </a>
		</li>`;
	}

	ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('dblclick', function () {
	myLeads = [];
	localStorage.clear();
	renderLeads(myLeads);
});

inputBtn.addEventListener('click', function () {
	myLeads.push(inputEl.value);
	inputEl.value = '';

	// Save the myLeads array to localStorage
	// PS: remember JSON.stringify()
	localStorage.setItem('myLeads', JSON.stringify(myLeads));

	renderLeads(myLeads);

	// To verify that it works:
	console.log(localStorage.getItem('myLeads'));
});
