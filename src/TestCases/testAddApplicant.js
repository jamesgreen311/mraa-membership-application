function testAddApplicantRunAll() {
    testAddApplicant1({}, true)
}

function testAddApplicant1(expected, verbose) {
    let d = {
        "timestamp" : moment().format('MMMM Do YYYY, h:mm:ss a'),
        "email" : "tom.tester@test.com",
        "firstName" : "Tom",
        "lastName" : "Tester",
        "streetAddress" : "1234 S Main St",
        "streetAddressExtended" : "Apt 2B",
        "city" : "AnyTown",
        "state" : "VA",
        "zipcode" : "11122",
        "contactNumber" : "804-111-2222",
        "membership" : "Associate",
        "medium" : "Acrylic, Mixed Media, Oil & Cold Wax",
        "socialMediaLinks" : "", 
        "websites" : "tomtesterfineart.com",
        "artistSignature" : "Tom Tester"
    }
    let t = 1
    const r = addNewApplicant(d)
    
    if (verbose) {
        console.log("Test %s: Application %s ", t, d)
    }

/*     if ("{condition}") {
        console.log("Test %s pass", t)
    } else {
        console.error("Test %s fail", t)
    } */
    return 
}