
/* const CONFIRMATION_DOCUMENT_ID = appSettings.confirmationdocid;
const NOTIFICATION_DOCUMENT_ID = appSettings.notificationdocid;
const DESTINATION_FOLDER_ID = appSettings.destinationfolderid;
const JURYSUBMISSION_FOLDER_ID = appSettings.jurysubmissionfolderid; */

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
		keys.forEach(function (k) {
			templ[k] = opt[k];
		});
	}
	return templ
		.evaluate()
		.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
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
	return ScriptApp.getService().getUrl();
}

function generateUniqueId() {
	const id = Math.floor(Math.random() * Math.floor(100000000))
		.toString(16)
		.toUpperCase();
	return JSON.stringify({ applicantid: id });
}

function sendConfirmation(applicant) {
	const sendTo = testMode?testEmail:applicant.emailAddress;
	const subject = "MRAA Member Application Confirmation";
	const fileId = createConfirmationDoc(applicant);
	const attachment = DriveApp.getFileById(fileId);
	const body =
		"We have received your application for membership in MRAA. Please review the attached document for any errors.";
	const htmlBody = 
		`<p>We have received your application for membership in MRAA. Please review the attached document for any errors.</p>
		<p>Use this link to <a href='${getScriptUrl()}?p=pay'>pay your member dues</a></p>`;
	GmailApp.sendEmail(sendTo, subject, body, { attachments: [attachment], htmlBody: htmlBody });
}

function sendNotification(applicant) {
	const sendTo = testMode ? testEmail : appSettings.distributionlist;
	const subject = "New Member Application Notification";
	const fileId = createNotificationDoc(applicant);
	const attachment = DriveApp.getFileById(fileId);
	const body =
		"A new member application has been submitted. A copy of the application is attached.";
	GmailApp.sendEmail(sendTo, subject, body, { attachments: [attachment] });
}

function createConfirmationDoc(applicant) {
	const chairpersonemail = getBoardMembershipChair().email
	const emailLink = `mailto:${chairpersonemail}`;
	const emailText = "Membership Chairperson";
	const docName = `${applicant.firstName} ${applicant.lastName} Application Confirmation`;
	const tmp = DriveApp.getFileById(appSettings.confirmationdocid);
	const folder = DriveApp.getFolderById(appSettings.destinationfolderid);
	const file = tmp.makeCopy(docName, folder);
	const fileId = file.getId();
	const doc = DocumentApp.openById(fileId);
	const body = doc.getBody();

	body.findText(emailText).getElement().editAsText().setLinkUrl(emailLink);
	body.replaceText(
		"{applicant_name}",
		`${applicant.firstName} ${applicant.lastName}`
	);
	body.replaceText("{email_address}", applicant.emailAddress);
	body.replaceText("{contact_number}", applicant.contactNumber);
	body.replaceText("{first_name}", applicant.firstName);
	body.replaceText("{last_name}", applicant.lastName);
	body.replaceText("{address1}", applicant.streetAddress1);
	body.replaceText("{address2}", applicant.streetAddress2);
	body.replaceText("{city}", applicant.city);
	body.replaceText("{state}", applicant.state);
	body.replaceText("{zip}", applicant.zipCode);
	body.replaceText("{membership_type}", applicant.membershipType);
	body.replaceText("{medium}", applicant.mediums ? applicant.mediums : "N/A");
	body.replaceText("{reasons}", applicant.reasonsForInterest);
	body.replaceText("{artist_signature}", applicant.artistSignature);
	body.replaceText("{business_name}", applicant.businessName);
	body.replaceText(
		"{website}",
		applicant.websites ? applicant.websites : "N/A"
	);
	body.replaceText(
		"{background}",
		applicant.artEducationBackground
			? applicant.artEducationBackground
			: "N/A"
	);
	body.replaceText(
		"{memberships}",
		applicant.artAssociatedMemberships
			? applicant.artAssociatedMemberships
			: "N/A"
	);
	body.replaceText(
		"{exhibitions}",
		applicant.exhibitions ? applicant.exhibitions : "N/A"
	);
	body.replaceText(
		"{social_media}",
		applicant.socialMediaLinks ? applicant.socialMediaLinks : "N/A"
	);
	doc.saveAndClose();

	return fileId;
}

function createNotificationDoc(applicant) {
	//const appsettings = JSON.parse(getAppSettings());
	const docName = `${applicant.firstName} ${applicant.lastName} Application Notification`;
	const tmp = DriveApp.getFileById(appSettings.notificationdocid);
	const folder = DriveApp.getFolderById(appSettings.destinationfolderid);
	const file = tmp.makeCopy(docName, folder);
	const fileId = file.getId();
	const doc = DocumentApp.openById(fileId);
	const body = doc.getBody();

	body.replaceText(
		"{applicant_name}",
		`${applicant.firstName} ${applicant.lastName}`
	);
	body.replaceText("{email_address}", applicant.emailAddress);
	body.replaceText("{contact_number}", applicant.contactNumber);
	body.replaceText("{first_name}", applicant.firstName);
	body.replaceText("{last_name}", applicant.lastName);
	body.replaceText("{address1}", applicant.streetAddress1);
	body.replaceText("{address2}", applicant.streetAddress2);
	body.replaceText("{city}", applicant.city);
	body.replaceText("{state}", applicant.state);
	body.replaceText("{zip}", applicant.zipCode);
	body.replaceText("{membership_type}", applicant.membershipType);
	body.replaceText("{medium}", applicant.mediums ? applicant.mediums : "N/A");
	body.replaceText("{artist_signature}", applicant.artistSignature);
	body.replaceText("{business_name}", applicant.businessName);
	body.replaceText("{reasons}", applicant.reasonsForInterest);
	body.replaceText(
		"{website}",
		applicant.websites ? applicant.websites : "N/A"
	);
	body.replaceText(
		"{background}",
		applicant.artEducationBackground
			? applicant.artEducationBackground
			: "N/A"
	);
	body.replaceText(
		"{memberships}",
		applicant.artAssociatedMemberships
			? applicant.artAssociatedMemberships
			: "N/A"
	);
	body.replaceText(
		"{exhibitions}",
		applicant.exhibitions ? applicant.exhibitions : "N/A"
	);
	body.replaceText(
		"{social_media}",
		applicant.socialMediaLinks ? applicant.socialMediaLinks : "N/A"
	);
	body.replaceText("{date_submitted}", applicant.dateSubmitted);
	doc.saveAndClose();

	return fileId;
}
