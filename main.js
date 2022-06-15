function doGet(e) {
    //const response = e
    //const membershipTypesList = 
    const response = [{
        membershipTypesList: getMembershipTypesList(),
            statusTypesList: getStatusTypesList(),
            chairpersonName: getMembershipChairpersonName(),
            chairpersonEmail: getMembershipChairpersonEmail()
    }]
    return contService = ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON)
}