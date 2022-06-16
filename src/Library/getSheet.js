/**
 * Retrieve a sheet by name.
 * 
 * @param {string} name 
 * @returns {object} sheet
 */
function getSheet(name) {
    let sh = null
    if (name) {
        try {
            sh = connect(sourceId).getSheetByName(name)
        } catch (error) {
            // bad or missing name
        }        
    }

    return sh
}