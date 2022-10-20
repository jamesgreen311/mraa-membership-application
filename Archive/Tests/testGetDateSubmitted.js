// test for default first then last return value
// expected result: true = found
function testGetDateSubmitted1(verbose) {
    let d = getDateSubmitted('3DFD906')
    let expected = true
    let t = "1"

    if (verbose) {
        console.log("Date Submitted: %s", d)    
    }

    return console.log((d!=="")===expected?"test %s pass":"test %s fail", t)
}

// test for bad id
// expected result: false = not found
function testGetDateSubmitted2(verbose) {
    let d = getDateSubmitted('3DFD901')
    let expected = false
    let t = "2"

    if (verbose) {
        console.log("Date Submitted: %s", d) 
    }

    return console.log((d!=="")===expected?"test %s pass":"test %s fail", t)
}

function testGetDateSubmittedRunAll() {
    testGetDateSubmitted1(true)
    testGetDateSubmitted2(true)
}