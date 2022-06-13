// test for default first then last return value
// expected result: true = found
function testGetApplicantEmail1(verbose) {
    let e = getApplicantEmail('3DFD906')
    let expected = true
    let t = "1"

    if (verbose) {
        console.log("Email: %s", e)    
    }

    return console.log((e!=="")===expected?"test %s pass":"test %s fail", t)
}

// test for bad id
// expected result: false = not found
function testGetApplicantEmail2(verbose) {
    let e = getApplicantEmail('3DFD901')
    let expected = false
    let t = "2"

    if (verbose) {
        console.log("Email: %s", e) 
    }

    return console.log((e!=="")===expected?"test %s pass":"test %s fail", "2")
}

function testGetApplicantEmailRunAll() {
    testGetApplicantEmail1(true)
    testGetApplicantEmail2(true)
}