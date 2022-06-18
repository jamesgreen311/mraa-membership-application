/**
 * Add a row with applicant data to spreadsheet
 * 
 * @param {object} data 
 * @returns {Array} applicant row added
 */
function addNewApplicant(data) {
    const ss = connect(sourceId)
    const ws = ss.getSheetByName("temp")
    const datetime = new Date()
    let row = []

    for (let key in data) {
        row.push(data[key])
    }
    row.push(datetime)
    ws.appendRow(row)

    return row
}