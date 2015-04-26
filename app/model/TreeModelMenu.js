Ext.define('GlobalMaxApp.model.TreeModelMenu', {
    extend: 'Ext.data.TreeModel',

    requires: [
        'Ext.data.TreeStore'
    ],

    fields: [{
        name: "title",
        convert: undefined
    },{
        name: "forumtitle",
        convert: undefined
    }, {
        name: "forumid",
        convert: undefined
    }]
    
    
});