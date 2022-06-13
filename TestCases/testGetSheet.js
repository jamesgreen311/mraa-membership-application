// test for an existing sheet 
// expected result: true = found
function testGetSheet1(verbose) {
    let expected = true
    let t = "1"
    let sh

    try {
        sh = getSheet("Application Detail")
    } catch (error) {
        console.log(error)
    }

    if (verbose) {
        console.log("test %s for Get Sheet: %s", t, sh.getName())
    }
    return console.log((!!sh)===expected?"test %s pass":"test %s fail", t)
}

// test for a non existent sheet
// expected result: false = not found
function testGetSheet2(verbose) {
    let expected = false
    let t = "2"
    let sh

    try {
        sh = getSheet("Bad Sheet")
    } catch (error) {
        console.log(error)
    }

    if (verbose) {
        console.log("test %s for Get Sheet: %s", t, "not found")
    }
    return console.log((!!sh)===expected?"test %s pass":"test %s fail", t)
}

function testGetSheetRunAll() {
    testGetSheet1(true)
    testGetSheet2(true)
}