function addNewApplicant(data) {
    const ss = connect(sourceId)
    const ws = ss.getSheetByName("temp")
    ws.appendRow([data])
}