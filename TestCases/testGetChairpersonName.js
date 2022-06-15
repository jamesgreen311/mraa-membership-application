function testGetChairpersonName(verbose) {
    let expected = true
    let n = getMembershipChairpersonName()

    if (verbose) {
        console.log("Test %s Chairperson Name: %s", "2", n)
    }

    return console.log((n !== "") === expected ? "test %s pass" : "test %s fail", "2")
}

function testGetChairpersonNameRunAll() {
    testGetChairpersonName(true)
}