App.staticData = {};

App.staticData.companyTypes = [
	{id: 1, name: 'ООО'},
	{id: 2, name: 'ИП'},
	{id: 3, name: 'ОАО'},
	{id: 4, name: 'ЗАО'},
	{id: 5, name: 'АНО'}
];

App.getStaticById = function(id, namespace){
	if(App.staticData[namespace]) {
		return _.find(App.staticData[namespace], function (item) {
			return item.id == id;
		});
	}
};