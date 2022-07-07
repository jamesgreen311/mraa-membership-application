function doGet(req) {
    let response
    //let response = {
        //membershipTypesList: getMembershipTypesList(),
        //statusTypesList: getStatusTypesList(),
        //chairpersonName: getMembershipChairpersonName()
        //chairpersonEmail: getMembershipChairpersonEmail(),
        //q: req.queryString 
    //} 
    //const get = (req.queryString?req.queryString:"")
    resp = routes[req.parameter.get]()
/*     switch (q) {
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
    } */
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
    let a = []
    var response

    switch (route) {
        case "addNewApplicant" :
            a = addNewApplicant(content)
            //response.id = a[0]
            response = {
                "status": 200,
                "data": a[0]
            }

            break
        default: 
            response = {
                "status": 500,
                "data": "invalid route"
            }
            // TODO 
    }

    let id = a[0]
    //Logger.log("id: %s", id)
    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON)
}