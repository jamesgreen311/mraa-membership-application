function getApplicationTables () {
    return {
        "application" : {
            "name" : "Applications",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "timestamp" : "a",
                "email" : "b",
                "firstName" : "c",
                "lastName" : "d",
                "streetAddress" : "e",
                "streetAddressExtended" : "f",
                "city" : "g",
                "state" : "h",
                "zipcode" : "i",
                "contactNumber" : "j",
                "membership" : "k",
                "medium" : "l",
                "socialMediaLinks" : "m", 
                "websites" : "n",
                "artistSignature" : "o"
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