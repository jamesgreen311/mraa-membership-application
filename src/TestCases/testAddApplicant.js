function testAddApplicantRunAll() {
    testAddApplicant1({}, true)
}

function testAddApplicant1(expected, verbose) {
    let d = {
        "timestamp" : moment().format('MMMM Do YYYY, h:mm:ss a'),
        "email" : "tom.tester@test.com",
        "firstname" : "Tom",
        "lastname" : "Tester",
        "streetaddress" : "1234 S Main St",
        "streetaddressextended" : "Apt 2B",
        "city" : "AnyTown",
        "state" : "VA",
        "zipcode" : "11122",
        "contactnumber" : "804-111-2222",
        "membership" : "Associate",
        "medium" : "Acrylic, Mixed Media, Oil & Cold Wax",
        "socialmedialinks" : "", 
        "websites" : "tomtesterfineart.com",
        "artistsignature" : "Tom Tester"
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