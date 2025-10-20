import { Department } from "./departments.js";

// Global variables
const editFormBtn = document.getElementById("edit-form-btn");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn");
const list = document.getElementById("division");
const inputFields = document.querySelectorAll(".input-fields");
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

// Fill departments select menu
for (var i = 0; i < departments.length; i++) {
	const entry = document.createElement("option");
	entry.setAttribute("value", departments[i].getDivName().toLowerCase());
	entry.textContent = departments[i].getDivName();
	list.appendChild(entry);
}

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

	// Enable input fields
	inputFields.forEach((element) => {
		element.disabled = false;
	});
}

// Function to save the edits
function saveEdits() {
	// Change which buttons to show/hide
	saveBtn.style.display = "none";
	editFormBtn.style.display = "block";
	cancelBtn.style.display = "none";

	// Disable input fields
	inputFields.forEach((element) => {
		element.disabled = true;
	});
}

// Function to cancel edits
function cancelEdits() {
	// Change which buttons to show/hide
	saveBtn.style.display = "none";
	editFormBtn.style.display = "block";
	cancelBtn.style.display = "none";

	// Disable input fields
	inputFields.forEach((element) => {
		element.disabled = true;
	});
}
