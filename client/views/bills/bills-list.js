Template.billsItemsViewModeAndSorting.events({
    'click .section-menu > a': function(e) {
        e.preventDefault();

        var $target = $(e.target),
            data = $target.data();

        App.userData.setUserParam('billsViewMode', data.mode);
    }
});

Template.registerHelper('isBillsSectionMenuSelected', function(mode){
    if(App.userData.getUserParam('billsViewMode') === mode){
        return 'active';
    }
});