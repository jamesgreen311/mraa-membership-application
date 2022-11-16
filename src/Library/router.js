// Not needed, routing done by the Controller
// 11/16/2022

var Routes = {
    path : function (r, callback) {
        Routes[r] = callback;
    }
}
Routes.path("", "index.html")
Routes.path("step2", "pay-dues.html")
Routes.path("step3", "upload-images.html")
