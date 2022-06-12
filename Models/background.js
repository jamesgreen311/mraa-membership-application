/*
    Summary
    =======
    Education Background is optional. Data may or may not exist for an applicant.

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
const ebSheet = getSheet("Education Background")
const ebSheetStruct = {
    applicantId: 0, // FK
    content: 1
}
const ebNumOfHeaderRows = 1
const ebStartColumn = 1
let ebDataAll = 
    ebSheet.getRange(
        ebNumOfHeaderRows+1, 
        ebStartColumn, 
        ebSheet.getLastRow()-ebNumOfHeaderRows, 
        ebSheet.getLastColumn()
        ).getDisplayValues()

/**
 * 
 * @param {string} id 
 * @returns {string} text | empty
 */
function getApplicantBackground(id) {
    let background = ""

    if (isValidId(id)) {
        for (let d of ebDataAll) {
            if (d[ebSheetStruct.applicantId].toUpperCase() === id.toUpperCase()) {
                // found
                background = d[ebSheetStruct.content]

                break
            }
        }        
    }

    return background
}