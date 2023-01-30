/*
	Data Source: MRAA Applicants
*/

function testGetAppSettings() {
   const s = getAppSettings()
   console.log(s.distributionlist)
}

function getSettingsTables() {
   return {
      appsettings: {
         name: "App Settings",
         type: "standard",
         headers: 1,
         schema: {
            distributionlist: "a2:a",
            statuslist: "d2:d",
            confirmationdocid: "e2",
            destinationfolderid: "f2",
            notificationdocid: "g2",
            dues: "i2", // TODO move to Membership master spreadsheet
         },
      },
      deployments: {
         name: "Deployments",
         type: "standard",
         headers: 1,
         schema: {
            applicationrelease: "a",
            deploymentid: "b",
            url: "f",
         },
      },
   }
}

/**
 * Get application settings
 *
 * @returns {string} JSON string
 */
function getAppSettings() {
   const t = getSettingsTables()
   const aSchema = t.appsettings.schema
   const dSchema = t.deployments.schema
   const settings = connect(APPLICANTS_ID).getSheetByName(t.appsettings.name)
   const deployment = connect(APPLICANTS_ID).getSheetByName(t.deployments.name)
   const confirmationDocId = settings
      .getRange(aSchema.confirmationdocid)
      .getDisplayValue()
   const _distributionList = settings
      .getRange(aSchema.distributionlist + settings.getLastRow())
      .getDisplayValues()
   const destinationFolderId = settings
      .getRange(aSchema.destinationfolderid)
      .getDisplayValue()
   const notificationDocId = settings
      .getRange(aSchema.notificationdocid)
      .getDisplayValue()

   // TODO Move dues to Membership master
   const dues = settings.getRange(aSchema.dues).getDisplayValue()
   // 1 - spread array to flatten form 2D array to 1
   // 2 - filter out empty arrays
   const distributionList = [].concat(..._distributionList).filter((r) => r)

   return {
      confirmationdocid: confirmationDocId,
      distributionlist: distributionList,
      destinationfolderid: destinationFolderId,
      notificationdocid: notificationDocId,
      dues: dues, // TODO move to membership master
   }
}
