function doGet(e) {
    let params = JSON.stringify(e)

    return HtmlService.createHtmlOutput(params)
}