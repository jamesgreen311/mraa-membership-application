// test for default first then last return value
// expected result: true = found
function testGetApplicantEmail1(verbose) {
    let e = getApplicantEmail('3DFD906')
    let expected = true
    if (verbose) {
        console.log("Email: "+e)    
    }

    return console.log((e!=="")===expected?"test %s pass":"test %s fail", "1")
}

// test for bad id
// expected result: false = not found
function testGetApplicantEmail2(verbose) {
    let e = getApplicantEmail('3DFD901')
    let expected = false
    if (verbose) {
        console.log("Email: "+e) 
    }

    return console.log((e!=="")===expected?"test %s pass":"test %s fail", "2")
}

function testGetApplicantEmailRunAll() {
    testGetApplicantEmail1()
    testGetApplicantEmail2()
}