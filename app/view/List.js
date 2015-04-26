Ext.define('GlobalMaxApp.view.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.list',
    id: 'idList',
    title : 'Profesores',
    store: 'Users',

    columns: [
        {header: 'Nombre',  dataIndex: 'id',  flex: 1},
        {header: 'Apellido', dataIndex: 'name', flex: 1}
    ]
});
