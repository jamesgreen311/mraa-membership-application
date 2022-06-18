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
function doPost(req) {
    const body = req.postData.contents
    const route = req.queryString?req.queryString:""
    const content = JSON.parse(body)
    let response = content

    switch (route) {
        case "addNewApplicant" :
            //let a = addNewApplicant(content)
            //response.id = a[0]
            response["m"] = "success"

            break
        default: 
            response = {
                "m":"Route invalid"
            }
            // TODO 
    }
    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON)
}