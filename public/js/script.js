class Department {
	// Class constructor
	constructor(division, dean, pen, locRep, chair) {
		this.divisionName = division;
		this.deanName = dean;
		this.penContact = pen;
		this.locRep = locRep;
		this.chairName = chair;
	}

	// Class getters
	getDivName() {
		return this.divisionName;
	}

	getDeanName() {
		return this.deanName;
	}

	getPenContact() {
		return this.penContact;
	}

	getLocRep() {
		return this.locRep;
	}

	getChairName() {
		return this.chairName;
	}
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
