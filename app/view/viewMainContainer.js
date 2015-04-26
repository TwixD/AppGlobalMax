Ext.define('GlobalMaxApp.view.viewMainContainer', {
    extend: 'Ext.container.Container',
    alias : 'widget.viewmaincontainer',
     layout: {
                type: 'hbox',
                align: 'stretch'
            },
    
    id: 'idViewport',
    requires: [
    'GlobalMaxApp.view.List',
    'GlobalMaxApp.view.MenuAcordion',
    'GlobalMaxApp.view.viewCalculadora',
    'GlobalMaxApp.view.ViewReportes'
    ],
    
    items: [
        {
        xtype: 'container',
        flex:1,
        title: 'Border Layout',
        layout: 'border',
        items: [
        {

        region: 'north',
        xtype: 'component',
        cls : 'hit-the-floor',
        html: '<h1 class="x-panel-header">GlobalMax Administrador</h1>',
        border: false,
        margin: '0 0 0 0'
        },{
                 
        region:'west',
        title: 'Menú',
        itemId: 'card-1',
        xtype: 'menuacordion',   
        collapsible: true, 
        region: 'west',
        width: 250,
        split: true
        },{
        id: 'idReporte',
        region: 'center', 
        layout:'fit',
          /* items:[
                    {
                       itemId: 'card-',
                      // xtype: 'viewcalculadora',
                       html:'PANEL UNO',
                    }
                    ,
                                        {
                       itemId: '20',
                       //xtype: 'viewcalculadora',
                       html:'PANEL DOS',
                    }
                 ]*/
        }]
    }]
    
    
});