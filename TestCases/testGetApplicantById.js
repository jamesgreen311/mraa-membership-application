// happy path test. get a known existing id
// expected result - true
function testGetApplicantById1() {
    console.log(!!getApplicantById('3DFD906').id)
}

// edge test. get a known bad id
// expected result - false
function testGetApplicantById2() {
    console.log(!!getApplicantById('3DFD901').id)
}