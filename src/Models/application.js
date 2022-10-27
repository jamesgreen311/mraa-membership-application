function getApplicationTables () {
    return {
        "application" : {
            "name" : "Applications",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "timestamp" : "a",
                "emailAddress" : "b",
                "firstName" : "c",
                "lastName" : "d",
                "streetAddress1" : "e",
                "streetAddress2" : "f",
                "city" : "g",
                "state" : "h",
                "zipCode" : "i",
                "contactNumber" : "j",
                "membershipType" : "k",
                "medium" : "l",
                "socialMediaLinks" : "m", 
                "websites" : "n",
                "signature" : "o",
                "artEducationBackground" : "p",
                "artAssociatedMemberships" : "q",
                "exhibitions" : "r",
                "reasonsForInterest" : "s"
            }
        }
    }
}

function addNewApplicant(a) {
    const at = getApplicationTables()
    const t = connect(MASTER_ID).getSheetByName(at.application.name)
    const schema = at.application.schema

    const newRow = []
    let ndx = 0
    newRow[ndx] = new Date()

    // loop through application object
    const keys = Object.keys(a)
    keys.forEach(key => {
        ndx = schema[key].colToIndex()
        newRow[ndx] = a[key]
    })

    t.appendRow(newRow)
    return newRow
}