function testOpenTab() {
    let tab = null
    try {
        tab = connect(sourceId).getSheetByName("Application Detail")
    } catch (error) {
        
    }
    console.log(!!tab)
}