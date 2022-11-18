function getSettingsTables() {
    return {
      appsettings: {
        name: "App Settings",
        type: "standard",
        headers: 1,
        schema: {
          maximagesize: "f2",
          membershipchairperson: "a2",
          chairpersonemail: "b2",
          distributionlist: "c2"
        },
      }
    };
  }

/**
 * Get application settings
 * 
 * @returns {string} JSON string 
 */
 function getAppSettings() {
    const t = getSettingsTables()
    const schema = t.appsettings.schema
    const settings = connect(APPLICANTS_ID).getSheetByName(t.appsettings.name)
    const maxImageSize = settings
        .getRange(
            schema.maximagesize
        )
        .getDisplayValue()
    const membershipChairEmail = settings
        .getRange(
            schema.chairpersonemail
        )
        .getDisplayValue()
    return JSON.stringify({maximagesize:maxImageSize, membershipchairemail:membershipChairEmail})
}