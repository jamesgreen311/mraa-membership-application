// test for valid existing id
// expected result: true = found, exhibitions can be empty
function testGetExhibitions1(verbose) {
    let expected = true
    let b = getApplicantExhibitions('3dfd906')
    if (verbose) {
        console.log("test %s for Exhibitions: %s", "1", b)
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "1")
}

// test for valid id but no exhibition data
// - no data may exist if the applicant id is valid or invalid
//
// expected result: false = not found | found but content empty
function testGetExhibitions2(verbose) {
    let expected = false
    let testId = "3dfd908"
    let b = getApplicantExhibitions(testId)
    if (verbose) {
        console.log("test %s for Exhibitions: %s", "2", (b===""?"none given":b))
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "2")
}

function testGetExhibitionsRunAll() {
    testGetExhibitions1(true)
    testGetExhibitions2(true)
}