// test for existing id
// expected result: true = found
function testIsValidId1() {
    let expected = true
    n = isValidId('3dfd906')
    return console.log((n!=="")===expected?"pass":"fail")
}

// test for missing id
// expected result: false = not found
function testIsValidId2() {
    let expected = false
    n = isValidId('3dfd900')
    return console.log((n!=="")===expected?"pass":"fail")
}