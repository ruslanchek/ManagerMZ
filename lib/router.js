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
            route: 'billsList',
            name: 'bills',
            type: 'item',
            icon: 'fa-share',
            color: 'cold-dark'
        },
        {
            title: 'Счета-фактуры',
            route: 'invoicesList',
            name: 'invoices',
            type: 'item',
            icon: 'fa-reply',
            color: 'cold-dark'
        },
        {
            title: 'Накладные',
            route: 'waybillsList',
            name: 'waybills',
            type: 'item',
            icon: 'fa-th-list',
            color: 'cold-dark'
        },
        {
            title: 'Договоры',
            route: 'contractsList',
            name: 'contracts',
            type: 'item',
            icon: 'fa-suitcase',
            color: 'cold-dark'
        },
        {
            title: 'Контент',
            header: true
        },
        {
            title: 'Номенклатура',
            route: 'contractsList',
            name: 'contracts',
            type: 'item',
            icon: 'fa-folder-open',
            color: 'cold-dark'
        },
        {
            title: 'Финансы',
            route: 'contractsList',
            name: 'contracts',
            type: 'item',
            icon: 'fa-rub',
            color: 'cold-dark'
        },
        {
            title: 'Прочее',
            header: true
        },
        {
            title: 'Уведомления',
            route: 'contractsList',
            name: 'contracts',
            type: 'item',
            icon: 'fa-envelope',
            color: 'heat-light' 
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

    this.route('billsList', {
        path: '/bills',
        data: function(){
            var bills = App.collections.Bills.find({}, {
                sort: App.model.getModelSort('Bills', ['date', 'title', 'payed', 'price'])
            });

            return _.extend(globalData, {
                h1: 'Счета',
                items: bills,
                count: bills.count(),
                currentSection: 'bills',
                viewMode: App.userData.getUserParam('billsViewMode')
            });
        }
    });

    this.route('billsEdit', {
        path: '/bills/:_id',
        data: function(){
        	var bill = App.collections.Bills.findOne(this.params._id);

            return _.extend(globalData, {
                currentSection: 'bills',
                item: bill
            });
        }
    });
});
