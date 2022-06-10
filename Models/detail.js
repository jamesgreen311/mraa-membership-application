const adSheet = getSheet("Application Detail")
const adSheetStruct = {
    applicantId: 1,
    firstName: 2,
    lastName: 3,
    email: 4,
    streetAddress: 5,
    streetAddress2: 6,
    city: 7,
    state: 8,
    zip: 9,
    mobile: 10,
    home: 11,
    membershipType: 12,
    medium: 13,
    artistSignature: 14,
    status: 15,
    dateSubmitted: 16
}

/**
 * Get an applicants name
 * 
 * @param {string} id : unique identifier
 * @param {string} order : firstlast, lastfirst
 * @returns {string} : full name
 */
function getApplicantName(id, order) {
    return _name
}

/**
 * Get an applicants status
 * 
 * @param {string} id : unique identifier
 * @returns {string} : status
 */
function getApplicantStatus(id) {
    return _status 
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
    return email
}

/**
 * Get an applicants submission date
 * 
 * @param {string} id : unique identifier
 * @returns {string} : datetime format as (@todo)
 */
function getDateSubmitted(id) {
    return dateSubmitted
}