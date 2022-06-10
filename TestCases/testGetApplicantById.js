// happy path test. get a known existing id
// expected result - true
function testGetApplicantById1() {
    let expected = true
    console.log((!!getApplicantById('3DFD906').id)===expected?"pass":"fail")
}

// edge test. get a known bad id
// expected result - false
function testGetApplicantById2() {
    let expected = false
    console.log((!!getApplicantById('3DFD901').id)===expected?"pass":"fail")
}

function testGetApplicantByIdRunAll() {
    testGetApplicantById1()
    testGetApplicantById2()
}