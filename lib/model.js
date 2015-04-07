App.model = {};

App.model.getModelSort = function(collectionName, fields){
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