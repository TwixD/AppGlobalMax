Ext.define('GlobalMaxApp.store.Lista', {    
    extend: 'Ext.data.Store',
    model: 'GlobalMaxApp.model.Listas',
    alias : 'widget.ListaStore',
    id: 'idListaStore',
    
    
    autoLoad :false,
    proxy: {
        type: 'ajax',
        url: 'api/poolConnection.php',

    reader: {
        type: 'json'

    }
}
  
});
