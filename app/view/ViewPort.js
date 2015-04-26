Ext.define('GlobalMaxApp.view.ViewPort', {
    extend: 'Ext.container.Viewport',
    layout: 'card',
    id: 'idViewport',
    requires: [
    'GlobalMaxApp.view.viewLogin',
    'GlobalMaxApp.view.viewMainContainer'
    ],
    items: [
                {
                   xtype: 'panel',
                   items:[
                   {
                        xtype:'viewlogin'
                   }
                   ]
                },
                {
                    itemId: 'card-1',
                    xtype: 'viewmaincontainer',
                }
           ]   
});
