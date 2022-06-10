const ebSheet = getSheet("Education Background")
const ebSheetStruct = {
    applicantId: 0,
    content: 1
}
const ebNumOfHeaderRows = 1
const ebStartColumn = 1

/**
 * 
 * @param {string} id 
 * @returns {string} background
 */
function getApplicantBackground(id) {
    let background = ""
    let data = 
        ebSheet.getRange(
            ebNumOfHeaderRows+1, 
            ebStartColumn, 
            ebSheet.getLastRow()-ebNumOfHeaderRows, 
            ebSheet.getLastColumn()
            ).getDisplayValues()

    for (let d of data) {
        if (d[ebSheetStruct.applicantId].toUpperCase() === id.toUpperCase()) {
            // found
            background = d[ebSheetStruct.content]

            break
        }
    }
    return background
}