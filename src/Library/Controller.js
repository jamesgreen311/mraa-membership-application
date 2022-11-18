/**
 * Loads page for requested exhibit id if it exists and is not closed
 * @param {*} e 
 * @returns 
 */
function doGet(e) {
    const pages = {
        ROOT: "index",
        STEP2: "pay-dues",
        STEP3: "upload-images"
    }
    let p = e.parameter.p
    p = p?p.toUpperCase():"ROOT" // default to index page
    const page = Object.keys(pages).includes(p)?pages[p]:"error" // catch any bad page requests

    if (page==="error") {
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
    const settings = JSON.parse(getAppSettings())
    const opt = {membershipchairemail:settings.membershipchairemail}
    return render("Pages/" + page, opt);
}

/**
 * Creates the Error page 
 * @returns {HTMLTemplate} Error page
 */
function loadError(msg) {
    const appSettings = JSON.parse(getAppSettings())
    const opt = {text:msg, support:"tech@metrorichmondart.org"}
    
    return render("Pages/error", opt);
}
