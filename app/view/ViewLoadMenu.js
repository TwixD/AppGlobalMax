Ext.define('GlobalMaxApp.view.ViewLoadMenu', {
    
    extend: 'Ext.tree.Panel',
    alias: 'widget.loadmenu',
    id: 'idLoadMenu',
    
        height: 400,
        reserveScrollbar: true,
        collapsible: true,
        loadMask: true,
        useArrows: true,
        rootVisible: false,
        store: 'TreeStoreMenu',
        animate: false,
       
        columns: [{

            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: 'Menu',
            width: 300,
            sortable: true,
            locked: true,
            action:'getActionListSimpsons',
            dataIndex: 'forumtitle'
        }]
})


 