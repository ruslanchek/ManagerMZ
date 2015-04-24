Router.configure({
    layoutTemplate: 'layout', 
    notFoundTemplate: '404'
});

globalData = {
    mainMenu: [
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
            color: 'myst-light'
        },
        {
            title: 'Накладные',
            route: 'waybillsList',
            name: 'waybills',
            type: 'item',
            icon: 'fa-th-list',
            color: 'mid-light'
        },
        {
            title: 'Договоры',
            route: 'contractsList',
            name: 'contracts',
            type: 'item',
            icon: 'fa-suitcase',
            color: 'neutral-light'
        },
        {
            title: 'Номенклатура',
            route: 'nomenclatureList',
            name: 'nomenclature',
            type: 'item',
            icon: 'fa-folder-open',
            color: 'soft-light'
        },
        {
            title: 'Финансы',
            route: 'financesList',
            name: 'finances',
            type: 'item',
            icon: 'fa-rub',
            color: 'mix-light'
        },
        {
            title: 'Контрагенты',
            route: 'contragentsList',
            name: 'contragents',
            type: 'item',
            icon: 'fa-users',
            color: 'warm-light'
        },
        {
            title: 'Уведомления',
            route: 'eventsList',
            name: 'events',
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

            });
        }
    });

    this.route('billsList', {
        path: '/bills',
        data: function(){
            var bills = App.collections.bills.find({}, {
                limit: 20,
                sort: App.model.getModelSort('bills', ['date', 'title', 'payed', 'price'])
            });

            return _.extend(globalData, {
                h1: 'Счета',
                items: bills,
                count: bills.count(),
                viewMode: App.userData.getUserParam('billsViewMode')
            });
        }
    });

    this.route('billsEdit', {
        path: '/bills/edit/:_id',
        data: function(){
        	var bill = App.collections.bills.findOne(this.params._id);

            return _.extend(globalData, {
                item: bill
            });
        }
    });

    this.route('billsCreate', {
        path: '/bills/create',
        data: function(){
            return _.extend(globalData, {
            });
        }
    });
});
