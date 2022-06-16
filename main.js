function doGet(e) {
    //const response = e
    //const membershipTypesList = 
    const response = {
        membershipTypesList: getMembershipTypesList(),
        statusTypesList: getStatusTypesList(),
        chairpersonName: getMembershipChairpersonName(),
        chairpersonEmail: getMembershipChairpersonEmail()
    }
    return contService = ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON)
}

/**
 * 
 * @param {*} e 
 */
function doPost(e) {
    const body = e.postData.contents
    const bodyJSON = JSON.parse(body)
    const ws = connect(sourceId)
    const ss = ws.getSheetByName("temp")
    ss.appendRow([bodyJSON.name])
}