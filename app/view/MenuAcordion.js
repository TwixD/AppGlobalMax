Ext.define('GlobalMaxApp.view.MenuAcordion', {
    
    extend: 'Ext.tree.Panel',
    alias: 'widget.menuacordion',
    id: 'idMenuAcordion',
        reserveScrollbar: true,
        collapsible: true,
        loadMask: true,
        useArrows: true,
        rootVisible: false,
        store: 'TreeStoreMenu',
        animate: false,
       
        columns: [{
            xtype: 'treecolumn',
            text: 'Ordenar módulos',
            width: 250,
            action:'getActionMenuClicked',
            dataIndex: 'forumtitle'
        }]
})


 