function testGetNewApplicantIdRunAll() {
    testGetNewApplicantId1("", true)
}

function testGetNewApplicantId1(expected, verbose) {
    let d = generateUniqueId()
    let t = 1
    
    if (verbose) {
        console.log("Test %s: Get Unique Id as json %s ", t, d)
    }
    return 
}