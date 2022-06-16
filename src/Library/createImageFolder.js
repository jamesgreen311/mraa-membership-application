/**
 * Create a new image folder for uploaded art work. Each show has it's own image folder.
 * 
 * @return {string} new folder id 
 */
 function createImageFolder(name) {
    let parentFolder = DriveApp.getFolderById(parentImageFolderId);

    return parentFolder.createFolder(name).getId();
}