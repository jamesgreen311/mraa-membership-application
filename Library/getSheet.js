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