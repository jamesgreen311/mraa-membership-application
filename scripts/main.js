var chairpersonEmail = ""
var chairpersonName = ""
var msgArea = document.getElementById("messages")

/**
 * Fetch chairperson email address
 */
function getChairpersonEmail() {
    const url =
    endPoint +
    "?getChairpersonEmail"

    msgArea.innerHTML += "<br>Fetching Chairperson Email, please wait..."

    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            chairpersonEmail = Object.values(resp)
            showChairpersonEmail()
        })
        .catch(err => msgArea.innerHTML += 
            "<br>There was a problem fetching the Chairperson's email address. Please contact support.")
}

/**
 * Fetch chairperson name
 */
function getChairpersonName() {
    const url =
    endPoint +
    "?getChairpersonName"

    msgArea.innerHTML += "<br>Fetching Chairperson Name, please wait..."

    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            chairpersonName = Object.values(resp)
            showChairpersonName()
        })
        .catch(err => msgArea.innerHTML += 
            "<br>There was a problem fetching the Chairperson's name. Please contact support.")
}

/**
 * Display chairperson email address
 */
function showChairpersonEmail() {
    msgArea.innerHTML += "<br>" + chairpersonEmail
}

/**
 * Display chairperson name
 */
function showChairpersonName() {
    msgArea.innerHTML += "<br>" +  chairpersonName
}

/**
 * Post new applicant data
 */
function addNewApplicant() {
    const url = endPoint + "?addNewApplicant"
    const options = {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(serializeNewApplicant())  
    }
    fetch(url, options)
        .then(resp => resp.json())
        .then(resp => {
            msgArea.innerHTML = "Success"
            msgArea.innerHTML = resp
        })
        .catch(err => msgArea.innerHTML = "There was a problem saving the new applicant. " + err.name)
}

/** 
 * Serialize form data to json for new applicant
 * 
 * @return {object} applicant
 */
function serializeNewApplicant() {
    //const id = generateUniqueId()
    let applicant = {
/*         "applicantId": id,
        "firstName": "Margaret",
        "lastName": "Jones",
        "streetAddress": "123 Main St",
        "streetAddressAdditional": "Apt 3B",
        "city": "Richmond",
        "state": "VA",
        "zip": "23100",
        "mobilePhoneNumber": "804.111.2222",
        "homePhoneNumber": "",
        "membershipType": "Associate",
        "medium": "Wood",
        "status": "Applicant" */
    }
    // Test data
    applicant.applicantId = generateUniqueId()
    applicant.firstName = "Margaret"
    applicant.lastName = "Jones"
    applicant.email = applicant.firstName + "." + applicant.lastName + "@gmail.com"
    applicant.streetAddress = "123 Main St"
    applicant.streetAddressAdditional = "Apt 3B"
    applicant.city = "Richmond"
    applicant.state = "VA"
    applicant.zip = "23100"
    applicant.mobilePhoneNumber = "804.111.2222"
    applicant.homePhoneNumber = ""
    applicant.membershipType = "Associate"
    applicant.medium = "Glass"
    applicant.artistSignature = applicant.firstName + " " + applicant.lastName
    applicant.status = "Applicant"

    return applicant
}

document.getElementById("getemail").addEventListener("click", getChairpersonEmail)
document.getElementById("getname").addEventListener("click", getChairpersonName)
document.getElementById("add").addEventListener("click", addNewApplicant)
