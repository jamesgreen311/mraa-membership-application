function testGetAppSettings() {
	const s = getAppSettings()
	console.log(s.distributionlist)
}

function getSettingsTables() {
	return {
		appsettings: {
			name: "App Settings",
			type: "standard",
			headers: 1,
			schema: {
				maximagesize: "b2", // move to MRAA Membership Jury spreadsheet
				distributionlist: "a2:a",
				membershiptypelist: "c2:c",
				statuslist: "d2:d",
				confirmationdocid: "e2",
				destinationfolderid: "f2",
				notificationdocid: "g2",
				jurysubmissionfolderid: "h2", // move to MRAA Membership Jury spreadsheet
				imagerequirements: "j2:k3",
				dues: "i2", // move to Membership master spreadsheet
			},
		},
	}
}

/**
 * Get application settings
 *
 * @returns {string} JSON string
 */
function getAppSettings() {
	const t = getSettingsTables()
	const schema = t.appsettings.schema
	const settings = connect(APPLICANTS_ID).getSheetByName(t.appsettings.name)
	/* 	const maxImageSize = settings
		.getRange(schema.maximagesize)
		.getDisplayValue(); */
	const confirmationDocId = settings
		.getRange(schema.confirmationdocid)
		.getDisplayValue()
	const _distributionList = settings
		.getRange(schema.distributionlist + settings.getLastRow())
		.getDisplayValues()
	const destinationFolderId = settings
		.getRange(schema.destinationfolderid)
		.getDisplayValue()
	const notificationDocId = settings
		.getRange(schema.notificationdocid)
		.getDisplayValue()
	/* 	const jurySubmissionFolderId = settings
		.getRange(schema.jurysubmissionfolderid)
		.getDisplayValue(); */
	const dues = settings.getRange(schema.dues).getDisplayValue()
	// 1 - spread array to flatten form 2D array to 1
	// 2 - filter out empty arrays
	const distributionList = [].concat(..._distributionList).filter((r) => r)

	return {
		//maximagesize: maxImageSize,
		confirmationdocid: confirmationDocId,
		distributionlist: distributionList,
		destinationfolderid: destinationFolderId,
		notificationdocid: notificationDocId,
		//jurysubmissionfolderid: jurySubmissionFolderId,
		dues: dues,
	}
}
