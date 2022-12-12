// test to retrieve the end of list characters
// expected result: true = found and not empty
function testGetEolMarker1(verbose) {
    let expected = true
    let t = "1"
    let m = getEolMarker()
    if (verbose) {
        console.log("test %s for Eol Marker: %s", t, m)
    }
    return console.log((m!=="")===expected?"test %s pass":"test %s fail", t)
}

// test end of list characters are missing
// expected result: false = empty string
function testGetEolMarker2(verbose) {
    let expected = false
    let t = "2"
    let m = getEolMarker()
    if (verbose) {
        console.log("test %s for Eol Marker: %s", t, m)
    }
    return console.log((m!=="")===expected?"test %s pass":"test %s fail", t)
}
function testGetEolMarkerRunAll() {
    testGetEolMarker1(true)
    testGetEolMarker2()
}