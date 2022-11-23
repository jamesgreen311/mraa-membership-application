const appSettings = JSON.parse(getAppSettings())
const CONFIRMATION_DOCUMENT_ID = appSettings.confirmationdocid 
const NOTIFICATION_DOCUMENT_ID = appSettings.notificationdocid
const DESTINATION_FOLDER_ID = appSettings.destinationfolderid

/**
 * Sends html to the browser
 * @param {File} f File object 
 * @param {object} opt text to replace page variables
 * @returns 
 */
function render(f, opt) {
    let templ = HtmlService.createTemplateFromFile(f);
    if (opt) {
      // opt is an object containing key/value pairs of data to be passed to page variables
      // ie, id=opt.id
      let keys = Object.keys(opt);
      keys.forEach(function(k){
        templ[k] = opt[k];
      })
  
    }
    return templ.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

/**
 * HTML fragments to include in HTML sent to browser
 * @param {File} file File object
 * @returns {HTMLTemplate} html fragment
 */
function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

/**
 * Gets current year in four digit format (yyyy)
 * @returns {number} year
 */
function getCurrentYear() {
  y = new Date().getFullYear();
  return y;
}

function getScriptUrl() {
  return ScriptApp.getService().getUrl()
}

function generateUniqueId() {
  const id = Math.floor(Math.random() * Math.floor(100000000)).toString(16).toUpperCase()
  return JSON.stringify({"applicantid" : id})
}

function sendConfirmation(applicant) {
  const sendTo = applicant.emailAddress
  const attachment = createConfirmationDoc(applicant)
}

function sendNotification(applicant) {
  const sendTo = JSON.parse(getAppSettings()).distributionlist
  const attachment = createNotificationDoc(applicant)
}

function createConfirmationDoc(applicant) {
  const appsettings = JSON.parse(getAppSettings())
  const chairpersonemail = appsettings.membershipchairemail
  const emailLink = `mailto:${chairpersonemail}`
  const emailText = "Membership Chairperson"
  const docName = `${applicant.firstName} ${applicant.lastName} Application Confirmation`
  const tmp = DriveApp.getFileById(CONFIRMATION_DOCUMENT_ID)
  const folder = DriveApp.getFolderById(DESTINATION_FOLDER_ID)
  const doc = tmp.makeCopy(docName, folder)
  const docId = doc.getId()
  const body = DocumentApp.openById(docId).getBody()    

  body.findText(emailText)
    .getElement()
    .editAsText()
    .setLinkUrl(emailLink)
  body.replaceText("{applicant_name}", `${applicant.firstName} ${applicant.lastName}`)
  body.replaceText("{email_address}", applicant.emailAddress)
  body.replaceText("{contact_number}", applicant.contactNumber)
  body.replaceText("{first_name}", applicant.firstName)
  body.replaceText("{last_name}", applicant.lastName)
  body.replaceText("{address1}", applicant.streetAddress1)
  body.replaceText("{address2}", applicant.streetAddress2)
  body.replaceText("{city}", applicant.city)
  body.replaceText("{state}", applicant.state)
  body.replaceText("{zip}", applicant.zipCode)
  body.replaceText("{medium}", applicant.mediums?applicant.mediums:"N/A")
  body.replaceText("{reasons}", applicant.reasonsForInterest)
  body.replaceText("{website}", applicant.websites)
  body.replaceText("{background}", applicant.artEducationBackground)
  body.replaceText("{memberships}", applicant.artAssociatedMemberships)
  body.replaceText("{exhibitions}", applicant.exhibitions)
  body.replaceText("{social_media}", applicant.socialMediaLinks)
  return doc
}

function createNotificationDoc(applicant) {
  const appsettings = JSON.parse(getAppSettings())
  const docName = `${applicant.firstName} ${applicant.lastName} Application Notification`
  const tmp = DriveApp.getFileById(NOTIFICATION_DOCUMENT_ID)
  const folder = DriveApp.getFolderById(DESTINATION_FOLDER_ID)
  const doc = tmp.makeCopy(docName, folder)
  const docId = doc.getId()
  const body = DocumentApp.openById(docId).getBody()    

  body.replaceText("{applicant_name}", `${applicant.firstName} ${applicant.lastName}`)
  body.replaceText("{email_address}", applicant.emailAddress)
  body.replaceText("{contact_number}", applicant.contactNumber)
  body.replaceText("{first_name}", applicant.firstName)
  body.replaceText("{last_name}", applicant.lastName)
  body.replaceText("{address1}", applicant.streetAddress1)
  body.replaceText("{address2}", applicant.streetAddress2)
  body.replaceText("{city}", applicant.city)
  body.replaceText("{state}", applicant.state)
  body.replaceText("{zip}", applicant.zipCode)
  body.replaceText("{medium}", applicant.mediums?applicant.mediums:"N/A")
  body.replaceText("{reasons}", applicant.reasonsForInterest)
  body.replaceText("{website}", applicant.websites)
  body.replaceText("{background}", applicant.artEducationBackground)
  body.replaceText("{memberships}", applicant.artAssociatedMemberships)
  body.replaceText("{exhibitions}", applicant.exhibitions)
  body.replaceText("{social_media}", applicant.socialMediaLinks)
  return doc
}