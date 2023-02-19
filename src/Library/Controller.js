/**
 * Loads page for requested exhibit id if it exists and is not closed
 * @param {*} e
 * @returns
 */
function doGet(e) {
   //console.log("doGet start: " + Date.now())
   const pages = {
      ROOT: "index",
      PAY: "pay-dues",
      UPLOAD: "upload-images",
   }
   let p = e.parameter.p
   p = p ? p.toUpperCase() : "ROOT" // default to index page
   const page = Object.keys(pages).includes(p) ? pages[p] : "error" // catch any bad page requests
   //console.log("doGet next loadPage: " + Date.now())
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
   //console.log("loadPage start: " + Date.now())
   let opt = {
      releaseMode: releaseMode,
   }
   if (page === "upload-images") {
      const jurySettings = getJurySettings() // TODO: async fetch for performance
      opt.maximagesize = jurySettings.maximagesize
      opt.submissionfolder = jurySettings.submissionfolder
      opt.images = jurySettings.images
   }
   console.log("loadPage next render: " + Date.now())
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
