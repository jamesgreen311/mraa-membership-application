const cfgSheet = getSheet("Config")
const cfgSheetStruct = {
    listMembershipTypes: 1, // start and end column number
    membershipChairperson: "B2",
    chairpersonEmail: "C2",
    listStatusTypes: 4, // start and end column number
    eolMarker: "E2" // end of list marker
}
const cfgNumOfHeaderRows = 1
const cfgStartColumn = 1
let cfgDataAll = 
    cfgSheet.getRange(
        cfgNumOfHeaderRows+1, 
        cfgStartColumn, 
        cfgSheet.getLastRow()-cfgNumOfHeaderRows, 
        cfgSheet.getLastColumn()
        ).getDisplayValues()
const eolMarker = getEolMarker()

/**
 * Get the end of list marker. 
 * This character marks the end of content for drop down lists.
 * 
 * @returns {string} string of characters used to mark the end of a list
 */
function getEolMarker() {
    let eol = ""
    try {
        eol = cfgSheet.getRange(cfgSheetStruct.eolMarker).getDisplayValue()
    } catch (error) {
        console.log(error)
    }
    return eol
}

function getMembershipTypesList() {
    let list = []
    let m 

    try {
        m = 
            cfgSheet.getRange(
                cfgNumOfHeaderRows+1,  
                cfgSheetStruct.listMembershipTypes,
                cfgSheet.getLastRow()-cfgNumOfHeaderRows,
                1
            ).getDisplayValues()
    } catch (error) {
        console.log(error)
    }

    // filter list, stop when eol marker is reached
    for (let _m of m) {
        if (_m[0] === eolMarker) {
            break
        }
        list.push(_m[0])
    }
    return list
}   

function getStatusTypesList() {
    let list = []
    let s

    try {
        s =
            cfgSheet.getRange(
                cfgNumOfHeaderRows + 1,
                cfgSheetStruct.listStatusTypes,
                cfgSheet.getLastRow() - cfgNumOfHeaderRows,
                1
            ).getDisplayValues()
    } catch (error) {
        console.log(error)
    }

    // filter list, stop when eol marker is reached
    for (let _s of s) {
        if (_s[0] === eolMarker) {
            break
        }
        list.push(_s[0])
    }
    return list
}

function getMembershipChairpersonName() {
    let name = cfgSheet.getRange(cfgSheetStruct.membershipChairperson).getDisplayValue()
    return name
}

function getMembershipChairpersonEmail() {
    let email = cfgSheet.getRange(cfgSheetStruct.chairpersonEmail).getDisplayValue()
    return email
}