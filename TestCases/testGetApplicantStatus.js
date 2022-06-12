// test for default first then last return value
// expected result: true = found, 
function testGetApplicantStatus1(verbose) {
    let n = getApplicantStatus('3DFD906')
    let expected = true
    if (verbose) {
        console.log("Test %s Status: %s", "1", n)    
    }

    return console.log((n!=="")===expected?"test %s pass":"test %s fail", "1")
}

// test for bad id
// expected result: false = not found
function testGetApplicantStatus2(verbose) {
    let n = getApplicantStatus('3DFD901')
    let expected = false
    if (verbose) {
        console.log("Test %s Status: %s", "2", n) 
    }

    return console.log((n!=="")===expected?"test %s pass":"test %s fail", "2")
}

function testGetApplicantStatusRunAll() {
    testGetApplicantStatus1(true)
    testGetApplicantStatus2()
}