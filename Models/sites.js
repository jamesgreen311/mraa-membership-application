/*
    Summary
    =======
    Sites is optional. Data may or may not exist for an applicant.

    Multiple rows for an applicant id are not supported at this time.
    If multiple rows exist for an applicant id only the first will be returned.

    Relationships
    =============
    It is related to the Application Detail table by Applicant Id (PK).
    There is a one to zero|one relationship.

    Valid responses
    ===============
    Requested id exists and content is not empty
    Requested id is found but content is empty
    No row is found for the requested id
*/
const stSheet = getSheet("Sites")
const stSheetStruct = {
    applicantId: 0,
    content: 1
}
const stNumOfHeaderRows = 1
const stStartColumn = 1
let stDataAll = 
    stSheet.getRange(
        stNumOfHeaderRows+1, 
        stStartColumn, 
        stSheet.getLastRow()-stNumOfHeaderRows, 
        stSheet.getLastColumn()
        ).getDisplayValues()

/**
 * 
 * @param {string} id 
 * @returns {string} text | empty
 */
 function getApplicantSites(id) {
    let sites = ""

    if (isValidId(id)) {
        for (let d of stDataAll) {
            if (d[stSheetStruct.applicantId].toUpperCase() === id.toUpperCase()) {
                // found
                sites = d[stSheetStruct.content]

                break
            }
        }        
    }
    return sites
}