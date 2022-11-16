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
        return loadError()
    } else {
        return loadPage(page)
    }
    //const page = pages[p]?pages[p]:"index"

    //return render("Pages/" + page)
}

/**
 * Load application page
 * @returns {HTMLTemplate} 
 */
function loadPage(page) {
    return render("Pages/" + page);
}

/**
 * Creates the Error page 
 * @returns {HTMLTemplate} Error page
 */
function loadError(msg) {
    const appSettings = JSON.parse(getAppSettings())
    const opt = {text:"msg", support:"tech@metrorichmondart.org"}
    
    return render("Pages/error", opt);
}
