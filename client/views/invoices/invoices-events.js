Template.invoicesItemsViewModeAndSorting.events({
    'click .section-menu > a': function(e) {
        e.preventDefault();

        var $target = $(e.target),
            data = $target.data();

        setUserParam('invoicesViewMode', data.mode);
    }
});