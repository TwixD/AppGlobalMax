Ext.define('GlobalMaxApp.model.Listas', {
    extend: 'Ext.data.Model',

    requires: [
       // 'Ext.data.reader.Json'
       'Ext.data.ArrayStore'
    ],

    //fields: ['id', 'name', 'email']
    fields: ['countryid', 'country'],
    
    
});