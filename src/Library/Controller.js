/**
 * Loads page for requested exhibit id if it exists and is not closed
 * @param {*} e 
 * @returns 
 */
function doGet(e) {
    return loadIndex()
}

/**
 * Load application page
 * @returns {HTMLTemplate} 
 */
function loadIndex() {
    return render("Pages/index");
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
