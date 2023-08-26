/**
 * Loads page for requested exhibit id if it exists and is not closed
 * @param {*} e
 * @returns
 */
function doGet(e) {
	const pages = {
		ROOT: "index",
		PAY: "pay-dues",
		UPLOAD: "upload-images",
	}
	let p = e.parameter.p
	p = p ? p.toUpperCase() : "ROOT" // default to index page
	const page = Object.keys(pages).includes(p) ? pages[p] : "error" // catch any bad page requests

	if (page === "error") {
		return loadError("Page Not Found")
	} else {
		return loadPage(page)
	}
}

/**
 * Load application page
 * @returns {HTMLTemplate}
 */
function loadPage(page) {
	const membershipchair = getBoardMembershipChair()

	let opt = {
		membershipchairemail: membershipchair.email,
		releaseMode: releaseMode,
	}
	if (page !== "upload-images") {
      const treasurer = getBoardTreasurer()
      const settings = getAnnualMemberDues()
      opt.dues = settings.dues
      opt.discount = settings.discount
      opt.treasureremail = treasurer.email
   } else {
		const jurySettings = getJurySettings()
		opt.maximagesize = jurySettings.maximagesize
		opt.submissionfolder = jurySettings.submissionfolder
		opt.images = jurySettings.images
	}

	return render("Pages/" + page, opt)
}

/**
 * Creates the Error page
 * @returns {HTMLTemplate} Error page
 */
function loadError(msg) {
	const opt = { text: msg, support: "tech@metrorichmondart.org" }

	return render("Pages/error", opt)
}
