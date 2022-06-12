/*
    Summary
    =======
    Membership Interest is optional. Data may or may not exist for an applicant.

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
const miSheet = getSheet("Membership Interest")
const miSheetStruct = {
    applicantId: 0, // FK
    content: 1
}
const miNumOfHeaderRows = 1
const miStartColumn = 1
let miDataAll = 
    miSheet.getRange(
        miNumOfHeaderRows+1, 
        miStartColumn, 
        miSheet.getLastRow()-miNumOfHeaderRows, 
        miSheet.getLastColumn()
        ).getDisplayValues()

/**
 * 
 * @param {string} id 
 * @returns {string} text | empty
 */
 function getApplicantInterest(id) {
    let interest = ""

    if (isValidId(id)) {
        for (let d of miDataAll) {
            if (d[miSheetStruct.applicantId].toUpperCase() === id.toUpperCase()) {
                // found
                interest = d[miSheetStruct.content]

                break
            }
        }        
    }
    return interest
}