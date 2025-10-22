import { Department } from "./departments.js";

// Global variables
const form = {
	ref: document.getElementById("form"),
	inputFields: new Map([
		["division", document.getElementById("division")],
		["dean", document.getElementById("dean-input")],
		["pen", document.getElementById("pen-input")],
		["loc", document.getElementById("loc-input")],
		["chair", document.getElementById("chair-input")],
	]),
	fieldsArr: document.querySelectorAll(".input-fields"),
	btns: new Map([
		["save", document.getElementById("save-btn")],
		["edit", document.getElementById("edit-form-btn")],
		["cancel", document.getElementById("cancel-btn")],
	]),
	departments: [
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
			"Katie Cunnion"
		),
		new Department(
			"Social Science",
			"Christie Gilliland",
			"Liz Peterson",
			"Joy Crawford",
			"Mark Thomason"
		),
	],
};

// Initialize the dropdown code
populateDepartmentDropdown();
addEventListeners();
form.ref.addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent form from actually submitting
});

// Function to populate the dropdowns
function populateDepartmentDropdown() {
	const divisionSelect = form.inputFields.get("division");

	form.departments.forEach((dept) => {
		const option = document.createElement("option");
		option.value = dept.getDivName();
		option.textContent = dept.getDivName();
		divisionSelect.appendChild(option);
	});
}

// Function to add event listners for everything inside the form
function addEventListeners() {
	const divisionSelect = form.inputFields.get("division");
	const editBtn = form.btns.get("edit");
	const saveBtn = form.btns.get("save");
	const cancelBtn = form.btns.get("cancel");

	divisionSelect.addEventListener("change", handleDivisionChange);
	editBtn.addEventListener("click", editForm);
	saveBtn.addEventListener("click", saveEdits);
	cancelBtn.addEventListener("click", cancelEdits);
}

// Event handlers
function handleDivisionChange() {
	const divisionSelect = form.inputFields.get("division");
	const selectedDivision = divisionSelect.value;
	const editBtn = form.btns.get("edit");

	if (selectedDivision === "") {
		editBtn.disabled = true;
		clearInputs(); // Call in case there is something in the inputs
		return;
	}

	// If selected dept exists
	editBtn.disabled = false;

	// Lookup and store the department reference that matches our select value
	const dept = form.departments.find(
		(d) => d.getDivName() === selectedDivision
	);

	// If we found a match, then fill the fields with the correct info for the dept.
	if (dept) {
		form.inputFields.get("dean").value = dept.getDeanName();
		form.inputFields.get("pen").value = dept.getPenContact();
		form.inputFields.get("loc").value = dept.getLocRep();
		form.inputFields.get("chair").value = dept.getChairName();
	}
}

// Function to edit the form, this will be called on clicked
function editForm() {
	toggleButtonDisplay({ save: true, edit: false, cancel: true });

	// Disable dropdown while editing
	form.inputFields.get("division").disabled = true;

	// Enable all text fields
	form.fieldsArr.forEach((el) => (el.disabled = false));
}

// Function to save the edits, this will be called on clicked
function saveEdits() {
	// Get all input fields from the form map
	const divisionSelect = form.inputFields.get("division");
	const deanRef = form.inputFields.get("dean");
	const penRef = form.inputFields.get("pen");
	const locRef = form.inputFields.get("loc");
	const chairRef = form.inputFields.get("chair");

	let selectedDivision = divisionSelect.value.trim();

	// --- Input Validation ---
	let isValid = true;

	// Validate each input field
	if (deanRef.value.trim() === "") {
		isValid = false;
		document.getElementById("err-dean").style.display = "inline";
	} else {
		document.getElementById("err-dean").style.display = "none";
	}

	if (penRef.value.trim() === "") {
		isValid = false;
		document.getElementById("err-pen").style.display = "inline";
	} else {
		document.getElementById("err-pen").style.display = "none";
	}

	if (locRef.value.trim() === "") {
		isValid = false;
		document.getElementById("err-loc").style.display = "inline";
	} else {
		document.getElementById("err-loc").style.display = "none";
	}

	if (chairRef.value.trim() === "") {
		isValid = false;
		document.getElementById("err-chair").style.display = "inline";
	} else {
		document.getElementById("err-chair").style.display = "none";
	}

	// If not valid, exit
	if (!isValid) {
		return;
	}

	// If valid, continue saving edits
	// Change which buttons to show/hide
	toggleButtonDisplay({ save: false, edit: true, cancel: false });

	// Disable input fields
	form.fieldsArr.forEach((element) => (element.disabled = true));

	// Update department data
	form.departments.forEach((dept) => {
		if (dept.getDivName() === selectedDivision) {
			dept.setDeanName(deanRef.value);
			dept.setPenContact(penRef.value);
			dept.setLocRep(locRef.value);
			dept.setChairName(chairRef.value);
		}
	});

	// Re-enable dropdown
	divisionSelect.disabled = false;
}

function cancelEdits() {
	const divisionSelect = form.inputFields.get("division");
	const selectedDivision = divisionSelect.value;

	const dept = form.departments.find(
		(d) => d.getDivName() === selectedDivision
	);
	if (dept) {
		form.inputFields.get("dean").value = dept.getDeanName();
		form.inputFields.get("pen").value = dept.getPenContact();
		form.inputFields.get("loc").value = dept.getLocRep();
		form.inputFields.get("chair").value = dept.getChairName();
	}

	clearErrors();
	divisionSelect.disabled = false;
	form.fieldsArr.forEach((el) => (el.disabled = true));
	toggleButtonDisplay({ save: false, edit: true, cancel: false });
}

// Helper functions
function toggleButtonDisplay({ save, edit, cancel }) {
	form.btns.get("save").style.display = save ? "block" : "none";
	form.btns.get("edit").style.display = edit ? "block" : "none";
	form.btns.get("cancel").style.display = cancel ? "block" : "none";
}

function clearInputs() {
	form.fieldsArr.forEach((el) => (el.value = ""));
}

function clearErrors() {
	document.getElementById("err-dean").style.display = "none";
	document.getElementById("err-pen").style.display = "none";
	document.getElementById("err-loc").style.display = "none";
	document.getElementById("err-chair").style.display = "none";
}
