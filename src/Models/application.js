function getApplicationTables () {
    return {
        "application" : {
            "name" : "Application Detail",
            "type" : "standard",
            "headers" : 2,
            "schema" : {
                "applicantId": "a",
                "dateSubmitted" : "q",
                "emailAddress" : "d",
                "firstName" : "b",
                "lastName" : "c",
                "streetAddress1" : "e",
                "streetAddress2" : "f",
                "city" : "g",
                "state" : "h",
                "zipCode" : "i",
                "contactNumber" : "j",
                "membershipType" : "k",
                "medium" : "l",
                "reasonsForInterest" : "n",
                "status": "o",
                "artistSignature": "m"
            }
        },
        "memberships": {
            "name": "Art Memberships",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "applicantid": "a",
                "firstname": "b",
                "lastname": "c",
                "content": "d"
            }
        },
        "background": {
            "name": "Education Background",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "applicantid": "a",
                "firstname": "b",
                "lastname": "c",
                "content": "d"
            }
        },
        "exhibitions": {
            "name": "Exhibitions",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "applicantid": "a",
                "firstname": "b",
                "lastname": "c",
                "content": "d"
            }
        },
        "socialmedia": {
            "name": "Social Media",
            "type" : "standard",
            "headers" : 1,
            "schema" : {
                "applicantid": "a",
                "firstname": "b",
                "lastname": "c",
                "content": "d"
            }
        }
    }
}

function addNewApplicant(a) {
    const at = getApplicationTables()
    const t = connect(APPLICANTS_ID).getSheetByName(at.application.name)
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