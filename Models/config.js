const cfgSheet = getSheet("Config")
const cfgSheetStruct = {
    membershipTypesList: 0,
    membershipChairperson: 1,
    chairpersonEmail: 2,
    statusTypesList: 3,
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

function getMembershipTypesList() {

}   

function getStatusTypesList() {

}

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