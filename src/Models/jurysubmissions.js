function testGetJurySettings() {
	const s = getJurySettings()
	console.log(s)
}

function getJurySubmissionTables() {
	return {
		submissions: {
			name: "Submissions",
			type: "standard",
			headers: 1,
			schema: {
				email: "c",
				firstname: "a",
				lastname: "b",
				phone: "d",
				worktitle: "e",
				width: "f",
				height: "g",
				medium: "h",
				filename: "i",
				fileid: "j",
				timestamp: "k",
				juryingmember: "l",
				filesuploaded: "m",
				applicanttoken: "n",
			},
		},
		archive: {
			name: "History",
			type: "standard",
			headers: 1,
			schema: {
				email: "c",
				firstname: "a",
				lastname: "b",
				phone: "d",
				worktitle: "e",
				width: "f",
				height: "g",
				medium: "h",
				filename: "i",
				fileid: "j",
				timestamp: "k",
			},
		},
		settings: {
			name: "Settings",
			type: "standard",
			headers: 1,
			schema: {
				images: {
					//array
					side: "a",
					count: "b",
				},
				contact: "c2",
				maximagesize: "d2",
				submissionfolder: "e2",
			},
		},
	}
}

function getJurySettings() {
	const t = getJurySubmissionTables()
	const sname = t.settings.name
	const stable = connect(JURY_SUBMISSION_ID).getSheetByName(sname)
	const schema = t.settings.schema
	const firstrow = t.settings.headers + 1
	const lastrow = stable.getLastRow()
	const imgdatarange = `${schema.images.side}${firstrow}:${schema.images.count}${lastrow}`
	const dimages = stable.getRange(imgdatarange).getDisplayValues()
	//const maximagesize =
	const settings = {}
	const images = {}
	dimages.forEach((d) => {
		images[d[0].toLowerCase()] = d[1]
	})
	settings.images = images
	settings.maximagesize = stable
		.getRange(schema.maximagesize)
		.getDisplayValue()
	settings.submissionfolder = stable
		.getRange(schema.submissionfolder)
		.getDisplayValue()

	return settings
}
