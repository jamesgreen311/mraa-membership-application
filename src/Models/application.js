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
