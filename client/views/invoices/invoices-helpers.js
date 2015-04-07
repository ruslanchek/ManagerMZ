Template.registerHelper('isInvoicesSectionMenuSelected', function(mode){
    if(getUserParam('invoicesViewMode') === mode){
        return 'active';
    }
});