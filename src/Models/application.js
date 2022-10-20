function getApplicationTables () {
    return {
        "application" : {
            "name" : "Applications",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "timestamp" : "a",
                "email" : "b",
                "firstname" : "c",
                "lastname" : "d",
                "streetaddress" : "e",
                "streetaddressextended" : "f",
                "city" : "g",
                "state" : "h",
                "zipcode" : "i",
                "contactnumber" : "j",
                "membership" : "k",
                "medium" : "l",
                "socialmedialinks" : "m", 
                "websites" : "n",
                "artistsignature" : "o"
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

    return newRow
}