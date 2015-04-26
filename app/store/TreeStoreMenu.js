Ext.define('GlobalMaxApp.store.TreeStoreMenu', {
    extend:  'Ext.data.TreeStore',
    model: 'GlobalMaxApp.model.TreeModelMenu', 
    alias : 'widget.MenuTreeStore',
    id: 'idMenuTreeStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: 'json',
        url: 'api/poolConnection.php?route=service_getmenu'
    }
});