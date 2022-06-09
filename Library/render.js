/**
 * Sends html to the browser
 * @param {File} f File object 
 * @param {object} opt text to replace page variables
 * @returns 
 */
 function render(f, opt) {
    let templ = HtmlService.createTemplateFromFile(f);
    if (opt) {
      // opt is an object containing key/value pairs of data to be passed to page variables
      // ie, id=opt.id
      let keys = Object.keys(opt);
      keys.forEach(function(k){
        templ[k] = opt[k];
      })
  
    }
    return templ.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}