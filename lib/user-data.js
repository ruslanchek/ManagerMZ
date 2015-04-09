App.userData = {};

App.userData.getUserParam = function(name){
    return Session.get(name);
};

App.userData.setUserParam = function(name, val){
    return Session.set(name, val);
};

App.userData.isUserParam = function(name, val){
    return Session.equals(name, val);
};

App.userData.getNewItemsCount = function(name){
	var count = 0;

	if(App.collections[name]){
		var cursor = App.collections[name].find();

		return cursor.count();
	}else{
		return false;
	}

	if(count <= 0){
		return false;
	}else{
		return count;
	}
};