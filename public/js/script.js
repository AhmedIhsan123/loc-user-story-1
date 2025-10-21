import { Department } from "./departments.js";

// Global variables
const editFormBtn = document.getElementById("edit-form-btn");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn");
const divisionSelect = document.getElementById("division");
const inputFields = document.querySelectorAll(".input-fields");
const formRef = document.getElementById("form");
const departments = [
	new Department(
		"Fine Arts",
		"Christie Gilliland",
		"Liz Peterson",
		"Monica Bowen",
		"Paul Metevier"
	),
	new Department(
		"Humanities",
		"Jamie Fitzgerald",
		"Liz Peterson",
		"Lisa Luengo",
		"Katie Cunnion "
	),
	new Department(
		"Social Science",
		"Christie Gilliland",
		"Liz Peterson",
		"Joy Crawford",
		"Mark Thomason"
	),
];

formRef.addEventListener("submit", function (event) {
	event.preventDefault();
});

// Fill departments select menu
for (var i = 0; i < departments.length; i++) {
	const entry = document.createElement("option");
	entry.setAttribute("value", departments[i].getDivName());
	entry.textContent = departments[i].getDivName();
	divisionSelect.appendChild(entry);
}

divisionSelect.addEventListener("change", function () {
	// Input references
	const deanRef = document.getElementById("dean-input");
	const penRef = document.getElementById("pen-input");
	const locRef = document.getElementById("loc-input");
	const chairRef = document.getElementById("chair-input");
	let selectedDivision = divisionSelect.value;

	// Disable/Enable edit button
	if (selectedDivision != "") {
		editFormBtn.disabled = false;
	} else {
		editFormBtn.disabled = true;
		deanRef.value = "";
		penRef.value = "";
		locRef.value = "";
		chairRef.value = "";
	}

	// For every element in the departments list
	departments.forEach((element) => {
		if (element.getDivName() == selectedDivision) {
			deanRef.value = element.getDeanName();
			penRef.value = element.getPenContact();
			locRef.value = element.getLocRep();
			chairRef.value = element.getChairName();
		}
	});
});

// Add event listners for the forms buttons
editFormBtn.addEventListener("click", editForm);
cancelBtn.addEventListener("click", cancelEdits);
saveBtn.addEventListener("click", saveEdits);

// Function to edit the form
function editForm() {
	// Change which buttons to show/hide
	saveBtn.style.display = "block";
	editFormBtn.style.display = "none";
	cancelBtn.style.display = "block";

	// Disable dropdown
	divisionSelect.disabled = true;

	// Enable input fields
	inputFields.forEach((element) => {
		element.disabled = false;
	});
}

// Function to save the edits
function saveEdits() {
	// Input references
	const deanRef = document.getElementById("dean-input");
	const penRef = document.getElementById("pen-input");
	const locRef = document.getElementById("loc-input");
	const chairRef = document.getElementById("chair-input");
	let selectedDivision = divisionSelect.value;

	// Change which buttons to show/hide
	saveBtn.style.display = "none";
	editFormBtn.style.display = "block";
	cancelBtn.style.display = "none";

	// Disable input fields
	inputFields.forEach((element) => {
		element.disabled = true;
	});

	// For every element in the departments list
	departments.forEach((element) => {
		if (element.getDivName() == selectedDivision) {
			element.setDeanName(deanRef.value);
			element.setPenContact(penRef.value);
			element.setLocRep(locRef.value);
			element.setChairName(chairRef.value);
		}
	});
}

// Function to cancel edits
function cancelEdits() {
	// Input references
	const deanRef = document.getElementById("dean-input");
	const penRef = document.getElementById("pen-input");
	const locRef = document.getElementById("loc-input");
	const chairRef = document.getElementById("chair-input");
	let selectedDivision = divisionSelect.value;

	// Change which buttons to show/hide
	saveBtn.style.display = "none";
	editFormBtn.style.display = "block";
	cancelBtn.style.display = "none";

	// Enable dropdown
	divisionSelect.disabled = false;

	// For every element in the departments list
	departments.forEach((element) => {
		if (element.getDivName() == selectedDivision) {
			deanRef.value = element.getDeanName();
			penRef.value = element.getPenContact();
			locRef.value = element.getLocRep();
			chairRef.value = element.getChairName();
		}
	});

	// Disable input fields
	inputFields.forEach((element) => {
		element.disabled = true;
	});
}
