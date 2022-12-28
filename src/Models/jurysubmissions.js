function testGetJurySettings() {
	const s = getJurySettings()
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
            contact : "c2",
            maximagesize : "d2",
         }
      }
	};
}

function getJurySettings() {
	const t = getJurySubmissionTables()
	const sname = t.settings.name
	const stable = connect(JURY_SUBMISSION_ID).getSheetByName(sname)
	const schema = t.settings.schema
	const firstrow = t.settings.headers + 1
	const lastrow = stable.getLastRow()
	const imgdatarange = `${schema.images.side}${firstrow}:${schema.images.count}${lastrow}`
	const dimages = stable
		.getRange(imgdatarange)
		.getDisplayValues()
	const maximagesize = stable
		.getRange(
			schema.maximagesize
		)
		.getDisplayValue()
	const settings = {}
	const images = {}
	dimages.forEach(d => {
		images[d[0].toLowerCase()] = d[1]
	})
	settings.images = images
	settings.maximagesize = maximagesize
	return settings
}