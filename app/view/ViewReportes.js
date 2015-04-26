Ext.define('GlobalMaxApp.view.ViewReportes', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.viewreportes',
    id: 'idReportes',
    width: 300,
    title: 'Horario',
    dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    frame: true,
    items: [
        { xtype: 'button', action: 'openwindow',text: 'Button 1' }
    ]
}],
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Start date'
    }, {
        xtype: 'datefield',
        fieldLabel: 'End date'
    }]

   
    

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
    
});