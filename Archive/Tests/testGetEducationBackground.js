// test for valid existing id
// expected result: true = found, education background can be empty
function testGetEducationBackground1(verbose) {
    let expected = true
    let b = getApplicantBackground('3dfd906')
    if (verbose) {
        console.log("test %s for Education Background: %s", "1", b)
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "1")
}

// test for valid id but no education background data
// - no data may exist if the applicant id is valid or invalid
//
// expected result: false = not found | found but content empty
function testGetEducationBackground2(verbose) {
    let expected = false
    let testId = "3dfd908"
    let b = getApplicantBackground(testId)
    if (verbose) {
        console.log("test %s for Education Background: %s", "2", (b===""?"none given":b))
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "2")
}

function testGetEducationBackgroundRunAll() {
    testGetEducationBackground1(true)
    testGetEducationBackground2(true)
}