function doGet(req) {
    var response
    //let response = {
        //membershipTypesList: getMembershipTypesList(),
        //statusTypesList: getStatusTypesList(),
        //chairpersonName: getMembershipChairpersonName()
        //chairpersonEmail: getMembershipChairpersonEmail(),
        //q: req.queryString 
    //} 
    const q = (req.queryString?req.queryString:"")
    switch (q) {
        case "getChairpersonName" :
            response = {
                chairpersonName: getMembershipChairpersonName()
            }
            break
        case "getChairpersonEmail" :
            response = {
                chairpersonEmail: getMembershipChairpersonEmail()
            }
            break
        default:
            // TODO default to get all applicant info 
    }
    return ContentService
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