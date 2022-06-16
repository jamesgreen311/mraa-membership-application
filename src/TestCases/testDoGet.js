function testDoGet() {
    console.log(JSON.parse(doGet().getContent()))
}

function testDoGetWithEmail() {
    console.log(JSON.parse(doGet().getContent()).chairpersonEmail)
}

function testDoGetWithName() {
    console.log(JSON.parse(doGet().getContent()).chairpersonName)
}

function testDoGetWithMembershipTypeList() {
    console.log(JSON.parse(doGet().getContent()).membershipTypesList)
}

function testDoGetWithStatusTypeList() {
    console.log(JSON.parse(doGet().getContent()).statusTypesList)
}

function testDoGetRunAll() {
    testDoGet() // get all info
    testDoGetWithEmail()
    testDoGetWithName()
    testDoGetWithMembershipTypeList()
    testDoGetWithStatusTypeList()
}