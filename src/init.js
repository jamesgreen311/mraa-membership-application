const projectName = "MRAA Membership Application";
const ownerName = "James Green";
const supportEmail = "tech@metrorichmondart.org";
const MASTER_ID = "1puqturm6WCBtfL3uaT_YICKHI9StLcPA4SosBuMs4ZY"
const APPLICANTS_ID = "1t7KG2DUdTyT8e7tVYLYvsY0Zy1bBShTcJvIg9QoqJGs"
const JURY_SUBMISSION_FOLDER = "1aST2apdaCEIHL3J2BhCqv1rDKfxpdnr5"
const JURY_SUBMISSION_ID = "1W4xT_-t8rEBOMIYLKMKQQVFkatS6LXZzZqN6fNJlUZQ"
const appSettings = JSON.parse(getAppSettings());
const jurySettings = getJurySettings()
const testEmail = "jamesgreen.311@gmail.com"
const releaseMode = "alpha"
const session = {
	membership: "applicant", // login needs membership to know what key to use for login access
}

/**
 * The init file is processed first by Google App script. 
 */
 function init() {

    // Scopes needed
    // SpreadsheetApp.open(file);
    // DriveApp.createFile(blob);
    // SpreadsheetApp.getUi();
    // DocumentApp.openById()
    // GmailApp.sendEmail("tech@metrorichmondart.org", "Test", "Test")

  }
