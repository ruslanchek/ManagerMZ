Router.configure({
    layoutTemplate: 'layout', 
    notFoundTemplate: '404'
});

globalData = {
    mainMenu: [
        {
            title: 'Документы',
            header: true
        },
        {
            title: 'Счета',
            name: 'invoices',
            type: 'item',
            path: '/invoices',
            icon: 'fa-share'
        },
        {
            title: 'Счета 1',
            name: 'invoices',
            type: 'item',
            path: '/invoices',
            icon: 'fa-share'
        }
    ]
};

Router.map(function() {
    this.route('home', {
        path: '/',
        data: function(){
            return _.extend(globalData, {
                currentSection: 'main'
            });
        }
    });

    this.route('invoicesList', {
        path: '/invoices',
        data: function(){
            var invoices = App.collections.Invoices.find({}, {
                sort: App.model.getModelSort('Invoices', ['date', 'title', 'payed', 'price'])
            });

            return _.extend(globalData, {
                h1: 'Счета',
                items: invoices,
                count: invoices.count(),
                currentSection: 'invoices',
                viewMode: App.userData.getUserParam('invoicesViewMode')
            });
        }
    });

    this.route('invoiceEdit', {
        path: '/invoices/:_id',
        data: function(){
        	var invoice = App.collection.Invoices.findOne(this.params._id);

            return _.extend(globalData, {
                currentSection: 'invoices',
                item: invoice
            });
        }
    });
});
