// Not needed, routing done by the Controller
// 11/16/2022

var Routes = {
    path : function (r, callback) {
        Routes[r] = callback;
    }
}
Routes.path("", "index.html")
Routes.path("pay", "pay-dues.html")
Routes.path("upload", "upload-images.html")
