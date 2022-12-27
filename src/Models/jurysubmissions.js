function testGetSettings() {
	const s = getSettings()
	console.log(s)
}

function getJurySubmissionTables() {
	return {
		submissions: {
			name: "Data",
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
			name: "Archive",
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
      settings : {
         name : "Config",
         type : "standard",
         headers : 1,
         schema : {
				images : { //array
					side : "a",
					count : "b"
				},
            contact : "c",
            maximagesize : "d",
         }
      }
	};
}

function getSettings() {
	const t = getJurySubmissionTables()
	const sname = t.settings.name
	const stable = connect(JURY_SUBMISSION_ID).getSheetByName(sname)
	const schema = t.settings.schema
	const firstrow = t.settings.headers + 1
	const lastrow = stable.getLastRow()
	const datarange = `${schema.images.side}${firstrow}:${schema.images.count}${lastrow}`
	const dimages = stable
		.getRange(datarange)
		.getDisplayValues()

	const settings = {}
	dimages.forEach(d => {
		settings[d[0].toLowerCase()] = d[1]
	})
	return settings
}