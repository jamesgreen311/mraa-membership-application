// test to retrieve list of memberhips types
// expected result: true = found and not empty
function testGetMembershipTypes1(verbose) {
    let expected = true
    let t = "1"
    let list = getMembershipTypesList()
    if (verbose) {
        console.log("test %s for Membership Types: %s", t, list)
    }
    return console.log((list!=="")===expected?"test %s pass":"test %s fail", t)
}

function testGetMembershipTypesRunAll() {
    testGetMembershipTypes1(true)
}