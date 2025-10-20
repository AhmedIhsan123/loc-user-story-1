import { Department } from "./departments.js";

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

const list = document.getElementById("division");
for (var i = 0; i < departments.length; i++) {
	const entry = document.createElement("option");
	entry.setAttribute("value", departments[i].getDivName().toLowerCase());
	entry.textContent = departments[i].getDivName();
	list.appendChild(entry);
}

function editForm() {
	const saveBtn = document.getElementById("save-btn");
	const cancelBtn = document.getElementById("cancel-btn");

	saveBtn.style.display = "block";
	cancelBtn.style.display = "block";
}

function saveEdits() {
	alert("Changes have been made successfully!");

	const saveBtn = document.getElementById("save-btn");
	const cancelBtn = document.getElementById("cancel-btn");

	saveBtn.style.display = "none";
	cancelBtn.style.display = "none";
}

function cancelEdits() {
	const saveBtn = document.getElementById("save-btn");
	const cancelBtn = document.getElementById("cancel-btn");

	saveBtn.style.display = "none";
	cancelBtn.style.display = "none";
}
