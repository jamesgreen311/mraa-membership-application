function testGetEducationBackground1() {
    let expected = true
    let b = getApplicantBackground('3dfd906')
    return console.log((b!=="")===expected?"pass":"fail")
}