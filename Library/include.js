/**
 * HTML fragments to include in HTML sent to browser
 * @param {File} file File object
 * @returns {HTMLTemplate} html fragment
 */
 function include(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
  }