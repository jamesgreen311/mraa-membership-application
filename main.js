function doGet(e) {
    //const response = e
    const response = [{
        status: "success"
    }]
    return contService = ContentService
        .createTextOutput(JSON.stringify(response.parameters))
        .setMimeType(ContentService.MimeType.JSON)
}