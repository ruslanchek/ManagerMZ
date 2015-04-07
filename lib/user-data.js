getModelSort = function(collectionName, fields){
    var sort = {},
        dir = 1;

    if(Session.equals('sortingDirFor' + collectionName, 'DESC')){
        dir = -1;
    }

    for (var i = 0; i < fields.length; i++) {
        if(Session.equals('sortingByFor' + collectionName, fields[i])){
            sort[fields[i]] = dir;
            return sort;
        }
    }

    return sort;
};

getUserParam = function(name){
    return Session.get(name);
};

setUserParam = function(name, val){
    return Session.set(name, val);
};

isUserParam = function(name, val){
    return Session.equals(name, val);
};