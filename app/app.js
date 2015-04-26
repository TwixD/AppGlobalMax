Ext.application({
    name: 'GlobalMaxApp',
    models: ['User','TreeModelMenu','Listas'],    
    stores: ['Users','TreeStoreMenu','Lista','MyStore'], 
    controllers: ['controllerCore'],
    autoCreateViewport: false,
    launch: function() {
        Ext.create('GlobalMaxApp.view.ViewPort')
    }
});