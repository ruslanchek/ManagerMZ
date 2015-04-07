Template.registerHelper('isAsideNavItemSelected', function(section, currentSection){
    if(section === currentSection){
        return 'active';
    }
});