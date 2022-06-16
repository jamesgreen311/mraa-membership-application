// happy path test. get a unique id
// expected result - a non empty string
function testGenerateUniqueId() {
    let id = generateUniqueId()
    return console.log(id===""?"fail":"pass")
}