export class Department {
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
