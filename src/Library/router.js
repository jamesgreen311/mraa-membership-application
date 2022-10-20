var Routes = {
    path : function (r, callback) {
        Routes[r] = callback;
    }
}

/* Routes.path('chairpersonEmail', getMembershipChairpersonEmail)
Routes.path('chairpersonName', getMembershipChairpersonName) */