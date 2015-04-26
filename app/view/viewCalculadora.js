Ext.define('GlobalMaxApp.view.viewCalculadora' ,{
    extend: 'Ext.tab.Panel',
    alias : 'widget.viewcalculadora',
    id: 'idViewcalculadora',
    title : 'Calculadora',
    action: 'activarTab2',
    dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [
        { xtype: 'button', text: 'Button 1' }
    ]
}],
    items: [{
        title: 'Foo'
    }, {
        title: 'Consultar vendedores',
        xtype: 'gridpanel',
        store: 'Users',
        
        columns: [
               {header: 'Id',  dataIndex: 'countryid',  flex: 1},
               {header: 'Pais', dataIndex: 'country', flex: 1}
           ]
    }]
   
   
});
