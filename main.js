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
    const ss = connect(sourceId)
    const ws = ss.getSheetByName("temp")
    ws.appendRow([bodyJSON.name])
}