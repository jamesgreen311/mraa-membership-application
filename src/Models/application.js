function testFindApplicant() {
	console.log(findApplicant("4CC843A"))
}

function testGetApplicant() {
	console.log(getApplicant("4CC843A"))
}

function getApplicationTables() {
	return {
		application: {
			name: "Application Detail",
			type: "standard",
			headers: 2,
			schema: {
				applicantId: "a",
				dateSubmitted: "u",
				emailAddress: "d",
				firstName: "b",
				lastName: "c",
				streetAddress1: "e",
				streetAddress2: "f",
				city: "g",
				state: "h",
				zipCode: "i",
				contactNumber: "j",
				membershipType: "k",
				mediums: "l",
				reasonsForInterest: "n",
				status: "t",
				artistSignature: "m",
				businessName: "w",
				artEducationBackground: "o",
				artAssociatedMemberships: "p",
				exhibitions: "q",
				socialMediaLinks: "s",
				websites: "r",
				dateSubmitted: "u",
				paymentProcessed: "v",
			},
		},
		jurysubmission: {
			name: "Jury Submissions",
			type: "standard",
			headers: 1,
			schema: {
				applicantid: "a",
				firstname: "b",
				lastname: "c",
				worktitle: "d",
				medium: "e",
				width: "f",
				height: "g",
				side: "h", // front|back
				filename: "i",
				fileid: "j",
				datesubmitted: "k",
			},
		},
	};
}

function saveApplication(a) {
	const newApplicant = {};
	const at = getApplicationTables();
	const t = connect(APPLICANTS_ID).getSheetByName(at.application.name);
	const schema = at.application.schema;

	const newRow = [];
	const keys = Object.keys(a);

	// capitalize state
	a.state = a.state.toUpperCase()
	
	keys.forEach((key) => {
		ndx = schema[key].colToIndex();
		newRow[ndx] = a[key];

		// store a copy of application data in memory for notification email
		newApplicant[key] = a[key];
	});

	t.appendRow(newRow);
	sendConfirmation(newApplicant);
	sendNotification(newApplicant);

	return newRow;
}

function getApplicant(id) {
	const t = getApplicationTables();
	const schema = t.application.schema;
	const applicantSheet = connect(APPLICANTS_ID).getSheetByName(t.application.name);
	const dataStartRow = t.application.headers + 1
	const a = applicantSheet
		.getDataRange()
		.getDisplayValues();
	let applicant = {}
	for (let r = dataStartRow-1; r < a.length - t.application.headers; r++) {
		if (a[r][0]===id) {
			applicant.id = a[r][0];
			applicant.firstName = a[r][1];
			applicant.lastName = a[r][2];
			applicant.emailAddress = a[r][3];
			break;
		}
	}

	return JSON.stringify(applicant)
}

function findApplicant(id) {
	const t = getApplicationTables();
	const schema = t.application.schema;
	const applicant = connect(APPLICANTS_ID).getSheetByName(t.application.name);
	const dataStartRow = t.application.headers + 1
	const a = applicant
		.getRange(
			schema.applicantId + dataStartRow + ":" + schema.applicantId + applicant.getLastRow())
		.getDisplayValues();
	const flat = [].concat(...a)
	return flat.includes(id)
}