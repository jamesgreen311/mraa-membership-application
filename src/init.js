const projectName = "MRAA Membership Application";
const ownerName = "James Green";
const supportEmail = "tech@metrorichmondart.org";
const MASTER_ID = "1puqturm6WCBtfL3uaT_YICKHI9StLcPA4SosBuMs4ZY"
const APPLICANTS_ID = "1t7KG2DUdTyT8e7tVYLYvsY0Zy1bBShTcJvIg9QoqJGs"
const appSettings = JSON.parse(getAppSettings())
const DOCUMENT_ID = appSettings.confirmationdocid 
const DESTINATION_FOLDER_ID = appSettings.destinationfolderid

/**
 * The init file is processed first by Google App script. 
 */
 function init() {

    // Scopes needed
    // SpreadsheetApp.open(file);
    // DriveApp.createFile(blob);
    // SpreadsheetApp.getUi();
    // DocumentApp.openById()

  }
