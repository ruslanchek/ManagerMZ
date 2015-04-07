Template.registerHelper('isInvoicesSectionMenuSelected', function(mode){
    if(App.userData.getUserParam('invoicesViewMode') === mode){
        return 'active';
    }
});