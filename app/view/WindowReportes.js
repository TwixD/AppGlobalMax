Ext.define('GlobalMaxApp.view.WindowReportes', {
    extend: 'Ext.window.Window',
    alias : 'widget.windowreportes',
    id: 'idWindowReportes',
    
    height: 200,
    width: 400,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'}],                 // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
    

   /* 
    items: [
        {
        xtype: 'container',
        flex:1,
        title: 'Border Layout',
        layout: 'border',
        items: [ 
        {
                 
        region:'west',
        itemId: 'card-1',
        xtype: 'menuacordion',   
        width: 300,
        collapsible: true,   // make collapsible
        layout: 'fit',
        border:1,
        
    },
    {
            id: 'idItemInterno',
            xtype: 'panel',
            layout:'card',
             region: 'center', 
            flex:1,
            items:[{
                itemId: 'card-2',
                flex:1,
                xtype: 'panel',
                html:'PANEL INT',
                items:[{action:'presionando',xtype:'button', text:'boton 1'}]
            },
                     {
                itemId: 'card-55',              
                xtype: 'list',
                border: true
            }]
        }]
    }]
    */
    
}).show();