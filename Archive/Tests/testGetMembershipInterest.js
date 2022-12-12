// test for valid existing id
// expected result: true = found, Interest can be empty
function testGetInterest1(verbose) {
    let expected = true
    let b = getApplicantInterest('3dfd906')
    if (verbose) {
        console.log("test %s for Interest: %s", "1", b)
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "1")
}

// test for valid id but no interest data
// - no data may exist if the applicant id is valid or invalid
//
// expected result: false = not found | found but content empty
function testGetInterest2(verbose) {
    let expected = false
    let testId = "3dfd908"
    let b = getApplicantInterest(testId)
    if (verbose) {
        console.log("test %s for Interest: %s", "2", (b===""?"none given":b))
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "2")
}

// test for invalid id
// - no data may exist if the applicant id is valid or invalid
//
// expected result: false = not found 
function testGetInterest3(verbose) {
    let expected = false
    let testId = "3dfd901"
    let b = getApplicantInterest(testId)
    if (verbose) {
        console.log("test %s for Interest: %s", "3", (b===""?"none found":b))
    }
    return console.log((b!=="")===expected?"test %s pass":"test %s fail", "3")
}

function testGetInterestRunAll() {
    testGetInterest1(true)
    testGetInterest2(true)
    testGetInterest3(true)
}