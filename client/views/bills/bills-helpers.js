Template.registerHelper('isBillsSectionMenuSelected', function(mode){
    if(App.userData.getUserParam('billsViewMode') === mode){
        return 'active';
    }
});