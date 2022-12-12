// test for valid existing id
// expected result: true = found, sites can be empty
function testGetSites1(verbose) {
    let expected = true
    let b = getApplicantSites('3dfd906')
    if (verbose) {
        console.log("test %s for Sites: %s", "1", b)
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "1")
}

// test for valid id but no exhibition data
// - no data may exist if the applicant id is valid or invalid
//
// expected result: false = not found | found but content empty
function testGetSites2(verbose) {
    let expected = false
    let testId = "3dfd908"
    let b = getApplicantSites(testId)
    if (verbose) {
        console.log("test %s for Sites: %s", "2", (b===""?"none given":b))
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "2")
}

function testGetSitesRunAll() {
    testGetSites1(true)
    testGetSites2(true)
}