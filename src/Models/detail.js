/*
    Application Detail is the primary table and contains one row for each applicant
*/
const adSheet = getSheet("Application Detail")
const adSheetStruct = {
    applicantId: 0, // PK
    firstName: 1,
    lastName: 2,
    email: 3,
    streetAddress: 4,
    streetAddress2: 5,
    city: 6,
    state: 7,
    zip: 8,
    mobile: 9,
    home: 10,
    membershipType: 11,
    medium: 12,
    artistSignature: 13,
    status: 14,
    dateSubmitted: 15
}
const adNumOfHeaderRows = 2
const adStartColumn = 1
const adDataAll =         
    adSheet.getRange(
        adNumOfHeaderRows+1, 
        adStartColumn, 
        adSheet.getLastRow()-adNumOfHeaderRows, 
        adSheet.getLastColumn()
        ).getDisplayValues()
        
/**
 * Get an applicants record by id.
 * 
 * @param {string} id 
 * @returns {object} applicant
 */
function getApplicantById(id) {
    let applicant = {}

    for (let d of adDataAll) {
        if (d[adSheetStruct.applicantId].toUpperCase() === id.toUpperCase()) {
            // found
            applicant.id = d[adSheetStruct.applicantId]
            applicant.firstName = d[adSheetStruct.firstName]
            applicant.lastName = d[adSheetStruct.lastName]
            applicant.email = d[adSheetStruct.email]
            applicant.streetAddress = d[adSheetStruct.streetAddress]
            applicant.streetAddress2 = d[adSheetStruct.streetAddress2]
            applicant.city = d[adSheetStruct.city]
            applicant.state = d[adSheetStruct.state]
            applicant.zip = d[adSheetStruct.zip]
            applicant.mobile = d[adSheetStruct.mobile]
            applicant.home = d[adSheetStruct.home]
            applicant.membershipType = d[adSheetStruct.membershipType]
            applicant.medium = d[adSheetStruct.medium]
            applicant.artistSignature = d[adSheetStruct.artistSignature]
            applicant.status = d[adSheetStruct.status]
            applicant.dateSubmitted = d[adSheetStruct.dateSubmitted]

            break
        }
    }    
    return applicant
}

/**
 * Get an applicants name.
 * 
 * @param {string} id unique identifier
 * @param {string} order ="firstlast" | "lastfirst"
 * @returns {string} full name
 */
function getApplicantName(id, order) {
    let applicant = {}
    let name = ""

    try {
        applicant = getApplicantById(id)
        if(isValidId(id)) {
            switch (order) {
                case "lastfirst": 
                    name = 
                    applicant.lastName
                    + ", "
                    + applicant.firstName
                    break
                default:
                    name = 
                    applicant.firstName
                    + " "
                    + applicant.lastName
            }
        }
    } catch (error) {
        // return empty string
    }

    return name
}

/**
 * Get an applicants status
 * 
 * @param {string} id : unique identifier
 * @returns {string} : status
 */
function getApplicantStatus(id) {
    let s = ""
    if(isValidId(id)) {
        s = getApplicantById(id).status
    }
    return s
}

/**
 * Get a list of applicants by last name
 * 
 * @param {string} lname : last name
 * @returns {array} array of ids | empty array
 */
function getApplicantsByLastName(lname) {
    return ids 
}

/**
 * Get an applicants email address
 * 
 * @param {string} id : unique identifier
 * @returns {string} email address | null
 */
function getApplicantEmail(id) {
    let e = ""
    if(isValidId(id)) {
        e = getApplicantById(id).email
    }
    return e
}

/**
 * Get an applicants submission date
 * 
 * @param {string} id : unique identifier
 * @returns {string} : datetime format as (@todo)
 */
function getDateSubmitted(id) {
    let d = ""
    if(isValidId(id)) {
        d = getApplicantById(id).dateSubmitted
    }
    return d
}

function isValidId(id) {
    let valid = adDataAll.filter(d => d[0] === id.toUpperCase())
    return valid.length > 0
}