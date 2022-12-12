function testGetMemberByPosition() {
    console.log(getMemberByPosition("President"))
    console.log(getMemberByPosition("Treasurer"))
    console.log(getMemberByPosition("Membership Chairperson"))
}

function getBoardMembersTable() {
    return {
      boardmembers: {
        name: "Board Members",
        type: "standard",
        headers: 1,
        schema: {
          position: "a2:a", // list of board officer titles
          email: "b", // position will give the row number for officers email, etc
          firstName: "c",
          lastName: "d"
        },
      }
    }
  }

function getMemberByPosition(position) {
    const t = getBoardMembersTable()
    const schema = t.boardmembers.schema
    const bm = connect(MASTER_ID).getSheetByName(t.boardmembers.name)
    const positionList = bm.getRange(schema.position + bm.getLastRow()).getDisplayValues()
    const rows = [].concat(...positionList)
    let row = rows.indexOf(position) // zero or greater is found

    let member = {}
    if (row>=0) {
        row += (1 + t.boardmembers.headers) // data starts at row 1 plus number of header rows
        member.email = bm.getRange(`${schema.email}${row}`).getDisplayValue()
        member.firstName = bm.getRange(`${schema.firstName}${row}`).getDisplayValue()
        member.lastName = bm.getRange(`${schema.lastName}${row}`).getDisplayValue()
    }
    return member
}

function getBoardPresident() {
    return getMemberByPosition("President")
}
function getBoardTreasurer() {
    return getMemberByPosition("Treasurer")
}
function getBoardMembershipChair() {
    return getMemberByPosition("Membership Chairperson")
}