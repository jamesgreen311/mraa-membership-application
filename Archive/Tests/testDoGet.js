function testDoGetRunAll() {
/*     testDoGet({'queryString':''}) // get all info
    testDoGetWithEmail({'queryString':'chairpersonEmail'})
    testDoGetWithName({'queryString':'chairpersonName'})
    testDoGetWithMembershipTypeList()
    testDoGetWithStatusTypeList() */
    testRoute1('chairpersonName')
}

function testDoGet(req) {
    console.log(JSON.parse(doGet(req).getContent()))
}

function testDoGetWithEmail(req) {
    console.log(JSON.parse(doGet(req).getContent()).chairpersonEmail)
}

function testDoGetWithName(req) {
    console.log(JSON.parse(doGet(req).getContent()).chairpersonName)
}

function testDoGetWithMembershipTypeList(req) {
    console.log(JSON.parse(doGet(req).getContent()).membershipTypesList)
}

function testDoGetWithStatusTypeList(req) {
    console.log(JSON.parse(doGet(req).getContent()).statusTypesList)
}

function testRoute1(p) {
    let r = Routes[p]
    console.log(Routes[p]())
}