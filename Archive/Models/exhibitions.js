/*
    Summary
    =======
    Exhibitions is optional. Data may or may not exist for an applicant.

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
const exSheet = getSheet("Exhibitions")
const exSheetStruct = {
    applicantId: 0, // FK
    content: 1
}
const exNumOfHeaderRows = 1
const exStartColumn = 1
let exDataAll = 
    exSheet.getRange(
        exNumOfHeaderRows+1, 
        exStartColumn, 
        exSheet.getLastRow()-exNumOfHeaderRows, 
        exSheet.getLastColumn()
        ).getDisplayValues()

/**
 * 
 * @param {string} id 
 * @returns {string} text | empty
 */
function getApplicantExhibitions(id) {
    let exhibitons = ""

    if (isValidId(id)) {
        for (let d of exDataAll) {
            if (d[exSheetStruct.applicantId].toUpperCase() === id.toUpperCase()) {
                // found
                exhibitons = d[exSheetStruct.content]

                break
            }
        }        
    }
    return exhibitons
}