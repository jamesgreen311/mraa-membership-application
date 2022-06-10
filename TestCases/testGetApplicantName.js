// test for default first then last return value
// expected result: true = found, 
function testGetApplicantName1() {
    let n = getApplicantName('3DFD906')
    let expected = true
    return console.log((n!=="")===expected?"pass":"fail")
}

// test for last then first return value
// expect n = lastName + ", " + firstName
// expected result: true = found
function testGetApplicantName2() {
    let n = getApplicantName('3DFD906', 'lastfirst')
    let expected = true
    return console.log((n!=="")===expected?"pass":"fail")
}

// test for bad order parameter
// expect n = firstName + " " + lastName
// expected result: true = found
function testGetApplicantName3() {
    let n = getApplicantName('3DFD906', 'badrequest')
    let expected = true
    return console.log((n!=="")===expected?"pass":"fail")
}

// test for bad applicant id
// expected result: false = not found
function testGetApplicantName4() {
    let n = getApplicantName('3DFD908')
    let expected = false
    return console.log((n!=="")===expected?"pass":"fail")
}

// test for bad applicant id, valid order
// expected result: false = not found
function testGetApplicantName5() {
    let n = getApplicantName('3DFD908', 'lastfirst')
    let expected = false
    return console.log((n!=="")===expected?"pass":"fail")
}

// test for case sensitivity of a known existing id
// expected result: true = found
function testGetApplicantName6() {
    let n = getApplicantName('3dfD906')
    let expected = true
    return console.log((n!=="")===expected?"pass":"fail")
}

function testGetApplicantNameRunAll() {
    testGetApplicantName1()
    testGetApplicantName2()
    testGetApplicantName3()
    testGetApplicantName4()
    testGetApplicantName5()
    testGetApplicantName6()
}